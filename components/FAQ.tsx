import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/config/site";

export default function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="A few questions we hear often. Reach out if you have one that isn't covered here."
        />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-[color:var(--color-border)] bg-white px-5 py-4 open:shadow-[var(--shadow-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[color:var(--color-ink)] marker:content-none">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border)] text-sm text-[color:var(--color-ink-soft)] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
