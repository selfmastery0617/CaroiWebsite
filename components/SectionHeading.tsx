import { ReactNode } from "react";
import Badge from "@/components/ui/Badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2
        id={id}
        className="text-balance text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-balance text-base leading-relaxed text-[color:var(--color-ink-soft)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
