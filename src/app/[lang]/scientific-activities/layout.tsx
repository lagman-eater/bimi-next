import { ReactNode } from "react";
import { getDictionary } from "../dictionaries";
import ScientificSidebar from "@/components/Scientific/ScientificSidebar";

export default async function ScientificLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(params.lang);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <ScientificSidebar messages={messages} />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
