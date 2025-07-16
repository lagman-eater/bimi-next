// src/app/[lang]/hrc/layout.tsx
import { ReactNode } from "react";
import { getDictionary } from "../dictionaries";  
import HRCSidebar from "@/components/HRC/HRCSidebar";

export default async function HRCLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(params.lang);
  const labels = messages.HRC.Tabs;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <HRCSidebar lang={params.lang} labels={labels} messages={messages} />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
