import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { whyCaroi } from "@/config/site";

export default function WhyCaroi() {
  return (
    <section id="why-caroi" className="bg-[color:var(--color-surface-muted)] py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why Caroi"
          title="An analytics partner focused on useful outcomes"
          description="We aim to keep every engagement grounded in what will actually help your business make better decisions."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyCaroi.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white p-6"
            >
              <span className="text-sm font-semibold text-[color:var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
