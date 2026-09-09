"use client";

import { ChangeEvent, FormEvent, ReactNode, useId, useState } from "react";
import Button from "@/components/ui/Button";
import { services } from "@/config/site";
import { validateContactForm, type ContactFormErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  serviceInterest: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const formId = useId();

  const handleChange =
    (field: keyof typeof initialValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    setServerMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (response.status === 503) {
        setStatus("unconfigured");
        setServerMessage(
          data.message ??
            "The contact form isn't connected to an email service yet."
        );
        return;
      }

      if (!response.ok) {
        setStatus("error");
        setServerMessage(
          data.message ?? "Something went wrong while sending your message."
        );
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong while sending your message.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <h3 className="text-lg font-semibold text-emerald-800">Message sent</h3>
        <p className="mt-2 text-sm leading-relaxed text-emerald-700">
          Thank you for reaching out. We will follow up as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot field: hidden from real users, left blank by them. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          required
          error={errors.name}
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className={inputClasses(Boolean(errors.name))}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Work Email"
          required
          error={errors.email}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>

        <Field
          id={`${formId}-company`}
          label="Company"
          required
          error={errors.company}
        >
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange("company")}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${formId}-company-error` : undefined}
            className={inputClasses(Boolean(errors.company))}
          />
        </Field>

        <Field
          id={`${formId}-phone`}
          label="Phone"
          error={errors.phone}
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            className={inputClasses(Boolean(errors.phone))}
          />
        </Field>
      </div>

      <Field id={`${formId}-service`} label="Service interest">
        <select
          id={`${formId}-service`}
          name="serviceInterest"
          value={values.serviceInterest}
          onChange={handleChange("serviceInterest")}
          className={inputClasses(false)}
        >
          <option value="">Select a service (optional)</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={`${formId}-message`}
        label="Message"
        required
        error={errors.message}
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          className={inputClasses(Boolean(errors.message))}
        />
      </Field>

      {status === "error" || status === "unconfigured" ? (
        <p
          role="alert"
          className={`rounded-lg border px-4 py-3 text-sm ${
            status === "unconfigured"
              ? "border-amber-200 bg-amber-50 text-amber-800"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-[color:var(--color-ink)]">
        {label}
        {required ? <span className="text-[color:var(--color-accent-strong)]"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[color:var(--color-ink)] shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)] ${
    hasError
      ? "border-red-400"
      : "border-[color:var(--color-border)] focus:border-[color:var(--color-accent)]"
  }`;
}
