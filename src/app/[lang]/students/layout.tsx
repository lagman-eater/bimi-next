// src/app/[lang]/students/layout.tsx

import { ReactNode } from "react";
import { getDictionary } from "../dictionaries";
import StudentsSidebar from "@/components/Students/StudentsSidebar";

export default async function StudentsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: "en" | "ru" | "kg" };
}) {
  const { lang } = params;
  const messages = await getDictionary(params.lang);
  const labels = messages.Students.Tabs;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <StudentsSidebar lang={lang} labels={labels} messages={messages} />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
