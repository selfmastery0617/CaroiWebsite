import type { Metadata } from "next";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing use of the ${siteConfig.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-ink)]">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
        This is starter website copy provided for general informational
        purposes and does not constitute legal advice.
      </p>

      <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
        <Section title="Acceptance of terms">
          <p>
            By accessing or using this website, you agree to these Terms of
            Use. If you do not agree, please discontinue use of the
            website.
          </p>
        </Section>

        <Section title="Use of this website">
          <p>
            This website is provided for general informational purposes
            about {siteConfig.name} and its services. You agree to use the
            website only for lawful purposes and not to interfere with its
            normal operation.
          </p>
        </Section>

        <Section title="No professional advice">
          <p>
            Content on this website is provided for general informational
            purposes and does not constitute professional, financial, or
            legal advice. Any business decisions should be made in
            consultation with appropriate professionals.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            The content, design, and branding on this website belong to{" "}
            {siteConfig.name} unless otherwise noted, and may not be
            reproduced without permission.
          </p>
        </Section>

        <Section title="Third-party links">
          <p>
            This website may reference or link to third-party services. We
            are not responsible for the content, accuracy, or practices of
            any third-party sites.
          </p>
        </Section>

        <Section title="No warranty">
          <p>
            This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis,
            without warranties of any kind, express or implied, regarding
            its accuracy, reliability, or availability.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, {siteConfig.name} shall
            not be liable for any indirect, incidental, or consequential
            damages arising from your use of this website.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            These Terms of Use may be updated from time to time. Continued
            use of the website after changes are posted constitutes
            acceptance of the updated terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these Terms of Use can be directed to{" "}
            <span className="font-medium text-[color:var(--color-ink)]">
              {siteConfig.contact.email}
            </span>
            .
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
