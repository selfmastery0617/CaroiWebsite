import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/config/site";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from question to decision"
          description="Every engagement follows the same disciplined process, adapted to the scope and complexity of your data."
        />

        <ol className="grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-muted)] p-6"
            >
              <span className="text-2xl font-semibold text-[color:var(--color-accent)]">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-[color:var(--color-ink)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {step.description}
              </p>
              {index < processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute right-[-14px] top-8 hidden h-px w-7 bg-[color:var(--color-border)] lg:block"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
