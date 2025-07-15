import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIMI",
  description: "Institute for Medics",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "kg" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "ru" | "kg" }; // ✅ Updated to specific lang type
}) {
  const { lang } = params;

  const supportedLangs = ["en", "ru", "kg"] as const; // ✅ Use `as const` for type safety
  if (!supportedLangs.includes(lang)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${lang}/translation.json`))
      .default;
  } catch (error) {
    console.error(`Failed to load translations for lang: ${lang}`, error);
    notFound();
  }

  return (
    <html lang={lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=PT+Sans:wght@400;700&family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} font-pt-serif text-1.2vw w-full m-0 p-0 box-border`}
      >
        <Header messages={messages} />
        <main>{children}</main>
        <Footer messages={messages} />
      </body>
    </html>
  );
}
