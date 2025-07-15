import { getDictionary } from "@/app/[lang]/dictionaries";
import Management from "@/components/Institute/Administration/Management";

export default async function ManagementPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);

  return <Management messages={messages} lang={lang} />;
}
