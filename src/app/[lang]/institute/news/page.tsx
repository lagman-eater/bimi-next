import { getDictionary } from "@/app/[lang]/dictionaries";
import NewsList from "@/components/News/NewsList";
import newsData from "../../../../../data/news.json"

type Lang = "en" | "ru" | "kg";

interface NewsPageProps {
  params: { lang: Lang };
}

export async function generateStaticParams() {
  const langs = ["en", "ru", "kg"];
  const slugs = newsData.map((newsItem) => newsItem.id);

  return langs.flatMap((lang) =>
    slugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { lang } = params;
  const messages = await getDictionary(lang);

  return (
    <NewsList
      lang={lang}
      labelNews={messages.Header.HeaderList.List1.Item5}
      labelBIMI={messages.Header.HeaderList.List1.Item4}
      more={messages.Institute.News.ListMain.More}
    />
  );
}
