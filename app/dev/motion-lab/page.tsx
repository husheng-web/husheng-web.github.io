import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionLab } from "@/components/motion/motion-lab";
import { enDictionary } from "@/data/dictionaries/en";

export const metadata: Metadata = {
  title: "Motion Lab",
  robots: { index: false, follow: false },
};

export default function MotionLabPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader dictionary={enDictionary} locale="en" showLanguageSwitch={false} />
      <main id="main-content">
        <MotionLab />
      </main>
      <SiteFooter dictionary={enDictionary} />
    </>
  );
}
