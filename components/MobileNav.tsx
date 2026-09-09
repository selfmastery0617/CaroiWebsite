"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

type MobileNavProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ id, isOpen, onClose }: MobileNavProps) {
  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={`fixed inset-x-0 top-16 z-40 origin-top border-b border-[color:var(--color-border)] bg-white shadow-lg transition-all duration-200 sm:top-20 lg:hidden ${
        isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
      }`}
    >
      <Container className="flex flex-col gap-1 py-6">
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-base font-medium text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-muted)]"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-3">
          <LinkButton href="/#contact" size="lg" className="w-full" onClick={onClose}>
            {siteConfig.ctaLabel}
          </LinkButton>
        </div>
      </Container>
    </div>
  );
}
