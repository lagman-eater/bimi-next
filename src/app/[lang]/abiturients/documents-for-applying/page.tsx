import { getDictionary } from "@/app/[lang]/dictionaries";
import DocumentsForApplying from "@/components/Abiturients/DocumentsForApplying";

export default async function DocumentsForApplyingPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);
  return <DocumentsForApplying messages={messages} />;
}
