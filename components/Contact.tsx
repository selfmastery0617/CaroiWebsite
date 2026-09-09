import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig, isConfigured } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Contact"
            align="left"
            title="Ready to get more value from your data?"
            description="Share a bit about your business and what you're hoping to understand. We'll follow up to schedule an initial conversation."
          />

          <dl className="mt-8 flex flex-col gap-4 text-sm">
            <ContactDetail
              label="Email"
              value={siteConfig.contact.email}
              href={isConfigured(siteConfig.contact.email) ? `mailto:${siteConfig.contact.email}` : undefined}
            />
            <ContactDetail
              label="Phone"
              value={siteConfig.contact.phone}
              href={isConfigured(siteConfig.contact.phone) ? `tel:${siteConfig.contact.phone}` : undefined}
            />
            <ContactDetail label="Location" value={siteConfig.contact.location} />
          </dl>
        </div>

        <div className="rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:col-span-3">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs font-medium uppercase tracking-wide text-[color:var(--color-ink-soft)]">
        {label}
      </dt>
      <dd className="font-medium text-[color:var(--color-ink)]">
        {href ? (
          <a href={href} className="hover:text-[color:var(--color-accent-strong)]">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
