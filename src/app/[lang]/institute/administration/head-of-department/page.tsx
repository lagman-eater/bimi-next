import { getDictionary } from "@/app/[lang]/dictionaries";
import HeadOfDepartment from "@/components/Institute/Administration/HeadOfDepartment";

export default async function HeadOfDepartmentPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);

  return <HeadOfDepartment messages={messages} lang={lang} />;
}
