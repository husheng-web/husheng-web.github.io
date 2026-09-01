import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function LocaleNotFound() {
  return (
    <Container as="section" className="py-24 sm:py-32">
      <p className="font-mono text-xs tracking-[0.14em] uppercase">404</p>
      <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
        [CONTENT TODO]
      </h1>
      <Link className="mt-8 inline-block underline underline-offset-4" href="/zh">
        Return to index
      </Link>
    </Container>
  );
}
