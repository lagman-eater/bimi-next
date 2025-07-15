"use client"
import Link from "next/link";
import styles from "./News.module.css";
import CalendarIcon from "../../../public/CalendarIcon";
import { useEffect, useState } from "react";

type Lang = "en" | "ru" | "kg";

interface NewsCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  imgSrc: string;
  lang: Lang;
  labelBIMI: string;
  more: string;
}

export default function NewsCard({
  id,
  title,
  description,
  date,
  imgSrc,
  lang,
  labelBIMI,
  more,
}: NewsCardProps) {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const formatted = new Date(date).toLocaleDateString(
      lang === "ru" ? "ru-RU" : lang === "kg" ? "ky-KG" : "en-GB",
      { day: "2-digit", month: "2-digit", year: "numeric" }
    );
    setFormattedDate(formatted);
  }, [date, lang]);

  return (
    <article className="w-[320px] sm:w-[360px] bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className={styles.imageWrapper}>
        <img src={imgSrc} alt={title} className={styles.image} />
      </div>

      <div className={styles.bimiSeparator}>
        <div className={styles.line} />
        {labelBIMI}
        <div className={styles.line} />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <div className={styles.date}>
          <CalendarIcon />
          <time dateTime={date}>{formattedDate || ""}</time>
        </div>
        <Link href={`/${lang}/news/${id}`}>
          <div className={styles.moreLink}>{more}</div>
        </Link>
      </div>
    </article>
  );
}
