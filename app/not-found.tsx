import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-24 text-center">
      <span className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-accent)]">
        404 error
      </span>
      <h1 className="text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-md text-balance text-base leading-relaxed text-[color:var(--color-ink-soft)]">
        The page you&apos;re looking for may have been moved or no longer
        exists. Let&apos;s get you back on track.
      </p>
      <LinkButton href="/" size="lg">
        Return home
      </LinkButton>
    </Container>
  );
}
