// src/app/[lang]/students/curriculum/page.tsx

import { getDictionary } from "@/app/[lang]/dictionaries";
import Curriculum from "@/components/Students/Curriculum";

export default async function CurriculumPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);

  return (
    <div className="text-gray-800 leading-relaxed">
      <Curriculum lang={lang} messages={messages} />
    </div>
  );
}
