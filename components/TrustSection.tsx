import Container from "@/components/ui/Container";

const points = [
  {
    title: "Clear visibility",
    description: "See how your business is actually performing, without digging through disconnected spreadsheets.",
  },
  {
    title: "Reliable reporting",
    description: "Reports built on consistent, validated data your team can reference with confidence.",
  },
  {
    title: "Actionable analysis",
    description: "Findings framed around the decisions they should inform, not just the numbers themselves.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-[color:var(--color-border-soft)] bg-[color:var(--color-surface-muted)]">
      <Container className="py-14 sm:py-16">
        <p className="mx-auto max-w-3xl text-balance text-center text-xl font-medium leading-relaxed text-[color:var(--color-ink)] sm:text-2xl">
          Most organizations already have the data they need. What is
          missing is a clear, reliable way to understand it and act on it.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-[color:var(--color-border-soft)] bg-white p-6"
            >
              <h3 className="text-base font-semibold text-[color:var(--color-ink)]">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
