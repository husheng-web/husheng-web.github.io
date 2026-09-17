import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "quiet";

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

type ButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

interface ButtonLinkProps extends SharedButtonProps {
  href: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent-action)] text-[var(--accent-foreground)] hover:bg-[var(--foreground-secondary)]",
  secondary:
    "border border-[var(--border-strong)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface-linen)]",
  quiet:
    "bg-transparent text-[var(--foreground)] hover:text-[var(--accent-interactive-hover)]",
};

const shared =
  "inline-flex min-h-11 items-center justify-center gap-2 px-5 font-medium text-sm transition-[background-color,border-color,color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] active:translate-y-px";

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={`${shared} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = "",
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={`${shared} ${variants[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
