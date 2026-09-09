import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-accent)] disabled:opacity-60 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-ink)] text-white hover:bg-[color:var(--color-accent-strong)] shadow-[0_1px_2px_rgba(15,23,42,0.08)]",
  secondary:
    "bg-white text-[color:var(--color-ink)] border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent-strong)]",
  ghost:
    "bg-transparent text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-alt)]",
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

function getClasses(variant: Variant, size: Size, className: string) {
  return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
}

type LinkButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href: string;
  external?: boolean;
  onClick?: () => void;
};

export function LinkButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  external = false,
  onClick,
}: LinkButtonProps) {
  const classes = getClasses(variant, size, className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = getClasses(variant, size, className ?? "");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
