import { notFound } from "next/navigation";
import { getDictionary } from "./dictionaries";
import HomePageMain from "../../components/HomePageMain/HomePageMain";
import { NextPage } from "next";

interface PageProps {
  params: { lang: "en" | "ru" | "kg" };
}

const Home: NextPage<PageProps> = async ({ params }) => {
  const { lang } = params;

  const supportedLangs = ["en", "ru", "kg"] as const;
  if (!supportedLangs.includes(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  return (
    <div>
      <HomePageMain messages={dict} lang={lang} />
    </div>
  );
};

export default Home;
