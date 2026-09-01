import type { HTMLAttributes } from "react";

type ContainerElement = "article" | "div" | "main" | "section";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  size?: "page" | "wide" | "reading";
}

export function Container({
  as,
  size = "page",
  className = "",
  ...props
}: ContainerProps) {
  const Component = as ?? "div";
  const widths = {
    page: "var(--container-page)",
    wide: "var(--container-wide)",
    reading: "var(--container-reading)",
  } as const;

  return (
    <Component
      className={`mx-auto w-full px-[var(--edge-padding)] ${className}`}
      style={{ maxWidth: widths[size] }}
      {...props}
    />
  );
}

export function WideContainer(props: Omit<ContainerProps, "size">) {
  return <Container size="wide" {...props} />;
}
