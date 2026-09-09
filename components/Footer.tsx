import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig, services, isConfigured } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-border-soft)] bg-[color:var(--color-surface-muted)]">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <span className="text-lg font-bold tracking-tight text-[color:var(--color-ink)]">
            Caroi<span className="text-[color:var(--color-accent)]">LLC</span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
            A data analytics business helping organizations turn complex
            data into clear insights, reporting, and dashboards.
          </p>
          {isConfigured(siteConfig.social.linkedin) ? (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-sm font-medium text-[color:var(--color-accent-strong)] hover:underline"
            >
              LinkedIn
            </a>
          ) : null}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">Navigation</h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">Services</h3>
          <ul className="flex flex-col gap-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  href="/#services"
                  className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">Company</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
              >
                Terms of Use
              </Link>
            </li>
            <li className="pt-1 text-sm text-[color:var(--color-ink-soft)]">
              {isConfigured(siteConfig.contact.email) ? (
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[color:var(--color-ink)]">
                  {siteConfig.contact.email}
                </a>
              ) : (
                <span>{siteConfig.contact.email}</span>
              )}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[color:var(--color-border-soft)]">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-[color:var(--color-ink-soft)] sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
