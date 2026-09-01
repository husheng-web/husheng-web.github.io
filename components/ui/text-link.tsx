import Link from "next/link";
import type { ComponentProps } from "react";

interface TextLinkProps extends ComponentProps<typeof Link> {
  arrow?: boolean;
}

export function TextLink({
  arrow = true,
  children,
  className = "",
  ...props
}: TextLinkProps) {
  return (
    <Link
      className={`inline-flex items-center gap-2 border-b border-current pb-1 font-mono tracking-[var(--tracking-label)] text-[var(--foreground)] text-[var(--type-label)] uppercase transition-[color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[var(--accent-interactive-hover)] active:translate-y-px ${className}`}
      {...props}
    >
      {children}
      {arrow ? <span aria-hidden="true">↗</span> : null}
    </Link>
  );
}
