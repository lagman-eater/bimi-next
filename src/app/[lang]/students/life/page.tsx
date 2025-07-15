import { getDictionary } from "@/app/[lang]/dictionaries";
import Life from "@/components/Students/Life";

export default async function LifePage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);

  return <Life messages={messages} lang={lang} />;
}
