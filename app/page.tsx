import { defaultLocale } from "@/lib/i18n";

export default function RootPage() {
  const destination = `/${defaultLocale}/`;

  return (
    <main>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <p>
        正在进入网站。如果页面没有自动跳转，请
        <a href={destination}>点击这里</a>。
      </p>
    </main>
  );
}
