// src/app/[lang]/students/questionnaire/page.tsx

import { getDictionary } from "@/app/[lang]/dictionaries";
import Questionnaire from "@/components/Students/Questionnaire";

export default async function QuestionnairePage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);

  return <Questionnaire messages={messages} />;
}
