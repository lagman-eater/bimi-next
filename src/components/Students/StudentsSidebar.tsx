// src/components/Students/StudentsSidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  lang: string;
  labels: {
    PointRating: string;
    Life: string;
    Curriculum: string;
    Questionnaire: string;
  };
  messages: any
}

export default function StudentsSidebar({ lang, labels, messages }: Props) {
  const pathname = usePathname();

  const active = (path: string) =>
    pathname?.includes(path)
      ? "text-bimi-blue font-bold bg-gray-100"
      : "text-gray-700 hover:text-bimi-blue";

  const linkClass =
    "block px-4 py-2 rounded transition-colors duration-200 text-sm sm:text-base";

  return (
    <aside className="w-full md:w-[250px] bg-white shadow-md rounded-xl p-4">
      <h2 className="text-[22px] font-bold font-[PT_Serif] text-bimi-blue mb-4">
        {messages.Header.HeaderList.ListTitle2}
      </h2>
      <nav className="flex flex-col gap-2">
        <Link
          href={`/${lang}/students/point-rating`}
          className={`${active("point-rating")} ${linkClass}`}
        >
          {labels.PointRating}
        </Link>
        <Link
          href={`/${lang}/students/life`}
          className={`${active("life")} ${linkClass}`}
        >
          {labels.Life}
        </Link>
        <Link
          href={`/${lang}/students/curriculum`}
          className={`${active("curriculum")} ${linkClass}`}
        >
          {labels.Curriculum}
        </Link>
        <Link
          href={`/${lang}/students/questionnaire`}
          className={`${active("questionnaire")} ${linkClass}`}
        >
          {labels.Questionnaire}
        </Link>
      </nav>
    </aside>
  );
}
