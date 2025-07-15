import { getDictionary } from "@/app/[lang]/dictionaries";
import PointRating from "@/components/Students/PointRating";

export default async function PointRatingPage({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(lang);

  return <PointRating messages={messages} lang={lang} />;
}
