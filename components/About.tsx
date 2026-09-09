import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-[color:var(--color-surface-muted)] py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow="About Caroi"
          align="left"
          title="A data analytics business built around one goal"
          description={null}
        />

        <div className="flex flex-col gap-5 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
          <p>
            Caroi LLC is a data analytics business focused on helping
            organizations make better use of their data. We work with the
            information you already have — spreadsheets, databases, exports,
            and reporting systems — and help turn it into something you can
            actually use.
          </p>
          <p>
            Our work centers on transforming complex or fragmented
            information into useful insights, reporting, dashboards, and
            visualizations that support clearer, faster, better-informed
            decisions.
          </p>
          <p>
            We take a business-first approach: understanding your goals and
            questions before deciding what analysis, tools, or reporting
            will actually help.
          </p>
        </div>
      </Container>
    </section>
  );
}
