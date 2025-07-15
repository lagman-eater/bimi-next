import newsData from "../../../../../data/news.json";

type Lang = "en" | "ru" | "kg";

interface NewsDetailPageProps {
  params: { lang: Lang; slug: string };
}

interface NewsItem {
  id: string;
  title: { en: string; ru: string; kg: string };
  description: { en: string; ru: string; kg: string };
  date: string;
  imgSrc: string;
}

export async function generateStaticParams() {
  return newsData.flatMap((item) => [
    { lang: "en", slug: item.id },
    { lang: "ru", slug: item.id },
    { lang: "kg", slug: item.id },
  ]);
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { lang, slug } = params;

  const newsItem = newsData.find((n) => n.id === slug) as NewsItem | undefined;

  if (!newsItem) return null; // fallback for static export

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{newsItem.title[lang]}</h1>
      <p className="text-gray-600 mb-6">
        <time dateTime={newsItem.date}>
          {new Date(newsItem.date).toLocaleDateString(
            lang === "ru" ? "ru-RU" : lang === "kg" ? "ky-KG" : "en-GB",
            { day: "2-digit", month: "2-digit", year: "numeric" }
          )}
        </time>
      </p>
      <img
        src={newsItem.imgSrc}
        alt={newsItem.title[lang]}
        className="w-full mb-6 object-cover rounded"
      />
      <p className="text-lg">{newsItem.description[lang]}</p>

      <a
        href={`/${lang}/news`}
        className="inline-block mt-8 text-[#1C41B0] hover:underline"
      >
        ← Back to News
      </a>
    </article>
  );
}
