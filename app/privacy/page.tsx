import type { Metadata } from "next";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-ink)]">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
        Last updated: this is starter website copy and has not been reviewed
        by legal counsel. Replace or verify it before relying on it for
        regulatory compliance.
      </p>

      <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
        <Section title="Overview">
          <p>
            This Privacy Policy describes how {siteConfig.name} (&ldquo;Caroi,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) handles
            information in connection with this website. It is intended as a
            general starting point for a small business website and should
            be reviewed by a qualified professional before being treated as
            a complete or compliant policy for your jurisdiction.
          </p>
        </Section>

        <Section title="Information you provide">
          <p>
            When you submit the contact form on this website, we receive the
            information you choose to provide, which may include your name,
            work email address, company name, phone number, service
            interest, and message. This information is used solely to
            respond to your inquiry and evaluate whether we can help with
            your request.
          </p>
        </Section>

        <Section title="Website usage information">
          <p>
            This website does not currently use analytics or tracking
            cookies. If analytics tools are added in the future, this policy
            will be updated to describe what information is collected and
            how it is used.
          </p>
        </Section>

        <Section title="How information may be used">
          <p>
            Information submitted through this site is used to respond to
            inquiries, evaluate potential engagements, and, where
            applicable, deliver services you have requested. We do not sell
            personal information.
          </p>
        </Section>

        <Section title="Service providers">
          <p>
            We may use third-party service providers, such as an email
            delivery service, to operate this website and process contact
            form submissions. These providers only receive the information
            necessary to perform their function.
          </p>
        </Section>

        <Section title="Data security">
          <p>
            We take reasonable steps to protect information submitted
            through this website, but no method of transmission or storage
            is completely secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this Privacy Policy can be directed to{" "}
            <span className="font-medium text-[color:var(--color-ink)]">
              {siteConfig.contact.email}
            </span>
            .
          </p>
        </Section>

        <Section title="Updates to this policy">
          <p>
            This policy may be updated from time to time as the website or
            our practices change. Continued use of this website after
            changes are posted constitutes acceptance of the updated policy.
          </p>
        </Section>
      </div>
    </Container>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-[color:var(--color-ink)]">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
