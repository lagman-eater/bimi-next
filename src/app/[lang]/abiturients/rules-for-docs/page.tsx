import { getDictionary } from "@/app/[lang]/dictionaries";
import RulesForDocs from "@/components/Abiturients/RulesForDocs";

export default async function RulesForDocsPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);
  return <RulesForDocs messages={messages} />;
}
