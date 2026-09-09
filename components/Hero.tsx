import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import AnalyticsVisual from "@/components/AnalyticsVisual";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(29,95,214,0.08),transparent)]"
      />
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        <div className="flex flex-col items-start gap-6 animate-in">
          <Badge>Data Analysis &amp; Business Intelligence</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Turn your data into decisions you can trust
          </h1>
          <p className="max-w-xl text-balance text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
            Caroi LLC helps organizations turn raw, fragmented, or complex
            data into clear insights, reliable reporting, and dashboards that
            support better business decisions.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/#contact" size="lg">
              Start a Conversation
            </LinkButton>
            <LinkButton href="/#services" size="lg" variant="secondary">
              Explore Our Services
            </LinkButton>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-[color:var(--color-border-soft)] pt-6 sm:grid-cols-4">
            {[
              "Data Analysis",
              "Dashboards",
              "Reporting",
              "Visualization",
            ].map((item) => (
              <div key={item} className="flex flex-col gap-1">
                <dt className="sr-only">Service area</dt>
                <dd className="text-sm font-medium text-[color:var(--color-ink-soft)]">
                  {item}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-in [animation-delay:120ms]">
          <AnalyticsVisual />
        </div>
      </Container>
    </section>
  );
}
