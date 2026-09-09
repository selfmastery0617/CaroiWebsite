export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceInterest: string;
  message: string;
  /** Honeypot field — real users never fill this in. */
  website: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: Pick<ContactFormData, "name" | "email" | "company" | "message"> &
    Partial<ContactFormData>
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  } else if (data.name.trim().length > 120) {
    errors.name = "Name is too long.";
  }

  if (!data.email || !EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Please enter a valid work email address.";
  } else if (data.email.trim().length > 254) {
    errors.email = "Email is too long.";
  }

  if (!data.company || data.company.trim().length < 2) {
    errors.company = "Please enter your company name.";
  } else if (data.company.trim().length > 160) {
    errors.company = "Company name is too long.";
  }

  if (data.phone && data.phone.trim().length > 40) {
    errors.phone = "Phone number is too long.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please add a few details about what you're looking for.";
  } else if (data.message.trim().length > 4000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
