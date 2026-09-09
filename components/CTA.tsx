import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-[color:var(--color-ink)] py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-balance max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to make sense of your data?
        </h2>
        <p className="max-w-xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
          Tell us about the questions you are trying to answer. We will
          follow up to discuss whether we are a good fit to help.
        </p>
        <LinkButton href="/#contact" size="lg" variant="secondary">
          Start a Conversation
        </LinkButton>
      </Container>
    </section>
  );
}
