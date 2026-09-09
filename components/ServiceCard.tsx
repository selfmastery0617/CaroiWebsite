import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  summary: string;
};

export default function ServiceCard({ icon, title, summary }: ServiceCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[color:var(--color-surface-alt)] text-[color:var(--color-accent-strong)] transition-colors group-hover:bg-[color:var(--color-ink)] group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{summary}</p>
    </div>
  );
}
