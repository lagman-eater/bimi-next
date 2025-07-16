import HRCPresentations from "@/components/HRC/Presentations";
import { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  params: { lang: "en" | "ru" | "kg" };
};

export default async function HRCPresentationsPage({ params }: Props) {
  const { lang } = params;
  const messages = await getDictionary(lang);

  const content = messages.HRC.Presentations;

  return <HRCPresentations title={content.Title} text={content.Text} />;
}
