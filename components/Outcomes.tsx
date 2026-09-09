import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { outcomes } from "@/config/site";

export default function Outcomes() {
  return (
    <section className="bg-[color:var(--color-surface-muted)] py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Business outcomes"
          title="What better analytics makes possible"
          description="The value of analytics shows up in how your team works day to day, not just in the reports themselves."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="flex flex-col gap-2 bg-white p-6">
              <h3 className="text-base font-semibold text-[color:var(--color-ink)]">
                {outcome.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
