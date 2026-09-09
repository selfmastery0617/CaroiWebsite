import { NextResponse } from "next/server";
import { validateContactForm, hasErrors } from "@/lib/validation";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  serviceInterest?: string;
  message?: string;
  website?: string;
};

const ALLOWED_CONTROL_CODES = new Set([9, 10, 13]);

function sanitize(value: string, maxLength: number): string {
  const cleaned = Array.from(value)
    .filter((char) => {
      const code = char.codePointAt(0) ?? 0;
      return code >= 32 || ALLOWED_CONTROL_CODES.has(code);
    })
    .join("");

  return cleaned.trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "The request could not be read. Please try again." },
      { status: 400 }
    );
  }

  // Honeypot: bots tend to fill every field. Real visitors never see or
  // populate this one, so a non-empty value is treated as spam and quietly
  // acknowledged without sending anything.
  if (payload.website) {
    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  }

  const data = {
    name: sanitize(payload.name ?? "", 120),
    email: sanitize(payload.email ?? "", 254),
    company: sanitize(payload.company ?? "", 160),
    phone: sanitize(payload.phone ?? "", 40),
    serviceInterest: sanitize(payload.serviceInterest ?? "", 120),
    message: sanitize(payload.message ?? "", 4000),
  };

  const errors = validateContactForm(data);
  if (hasErrors(errors)) {
    return NextResponse.json(
      { message: "Please correct the highlighted fields.", errors },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    // No email provider is connected yet. Fail clearly instead of
    // pretending the message was delivered.
    console.warn(
      "[contact] Submission received but no email provider is configured. " +
        "Set RESEND_API_KEY and CONTACT_EMAIL to enable delivery.",
      { name: data.name, email: data.email, company: data.company }
    );

    return NextResponse.json(
      {
        message:
          "The contact form isn't connected to an email service yet. Your message wasn't sent, please reach out directly using the contact details on this page.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Caroi LLC Website <onboarding@resend.dev>",
        to: [contactEmail],
        reply_to: data.email,
        subject: `New inquiry from ${data.name} (${data.company})`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
          <p><strong>Service interest:</strong> ${escapeHtml(
            data.serviceInterest || "Not specified"
          )}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      console.error("[contact] Resend API error", response.status, errorBody);
      return NextResponse.json(
        {
          message:
            "We couldn't send your message right now. Please try again shortly or reach out directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Message sent." }, { status: 200 });
  } catch (error) {
    console.error("[contact] Unexpected error sending message", error);
    return NextResponse.json(
      {
        message:
          "We couldn't send your message right now. Please try again shortly or reach out directly.",
      },
      { status: 500 }
    );
  }
}
