// src/app/[lang]/institute/administration/layout.tsx

import { ReactNode } from "react";
import { getDictionary } from "../../dictionaries"; // adjust import
import TabSwitcher from "@/components/Institute/Administration/TabSwitcher";

interface Props {
  children: ReactNode;
  params: { lang: "en" | "ru" | "kg" };
}

export default async function AdministrationLayout({
  children,
  params,
}: Props) {
  const { lang } = params;
  const messages = await getDictionary(lang);
  const labels = messages.Institute.Tabs;

  return (
    <section className="px-4 py-6 max-w-7xl mx-auto">
      <TabSwitcher lang={lang} labels={labels} />
      {children}
    </section>
  );
}
