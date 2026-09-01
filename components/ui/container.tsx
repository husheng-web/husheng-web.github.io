import type { HTMLAttributes } from "react";

type ContainerElement = "article" | "div" | "main" | "section";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  wide?: boolean;
}

export function Container({
  as,
  wide = false,
  className = "",
  ...props
}: ContainerProps) {
  const Component = as ?? "div";
  const width = wide ? "var(--container-wide)" : "var(--container-content)";

  return (
    <Component
      className={`mx-auto w-full px-[var(--edge-padding)] ${className}`}
      style={{ maxWidth: width }}
      {...props}
    />
  );
}
