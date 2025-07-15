import { getDictionary } from "@/app/[lang]/dictionaries";
import Staff from "@/components/Institute/Administration/Staff";

export default async function StaffPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);
  return <Staff messages={messages} lang={lang} />;
}
