import NewsCard from "./NewsCard";
import newsData from "../../../data/news.json";

type Lang = "en" | "ru" | "kg";

interface NewsListProps {
  lang: Lang;
  labelBIMI: string;
  labelNews: string;
  more: string;
}

export default function NewsList({
  lang,
  labelBIMI,
  labelNews,
  more,
}: NewsListProps) {
  return (
    <section className="bg-[#F5F6F7] py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1C41B0] mb-10">{labelNews}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {newsData.map(({ id, title, description, date, imgSrc }) => (
            <NewsCard
              key={id}
              id={id}
              title={title[lang]}
              description={description[lang]}
              date={date}
              imgSrc={imgSrc}
              lang={lang}
              labelBIMI={labelBIMI}
              more={more}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
