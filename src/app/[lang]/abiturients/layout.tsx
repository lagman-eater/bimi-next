import { ReactNode } from "react";
import { getDictionary } from "../dictionaries";  
import AbiturientsSidebar from "@/components/Abiturients/AbiturientsSidebar";

export default async function AbiturientsLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: "en" | "ru" | "kg" };
}) {
  const { lang } = params;
  const messages = await getDictionary(lang);
  const labels = messages.Abiturients.Tabs;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 bg-[F5F7FC]">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <AbiturientsSidebar lang={lang} labels={labels} messages={messages} />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
