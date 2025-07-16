import HRCMain from "@/components/HRC/Main";
import { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  params: { lang: "en" | "ru" | "kg" };
};

export default async function HRCMainPage({ params }: Props) {
  const { lang } = params;
  const messages = await getDictionary(lang);

  const content = messages.HRC.Main;

  return (
    <HRCMain
      title={content.Title}
      text1={content.Text1}
      text2={content.Text2}
    />
  );
}
