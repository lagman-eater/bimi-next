"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  lang: string;
  labels: {
    Rules: string;
    Documents: string;
    Arrival: string;
    Application: string;
  };
  messages: any;
}

export default function AbiturientsSidebar({ lang, labels, messages }: Props) {
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
        {messages.Header.HeaderList.ListTitle3}
      </h2>
      <nav className="flex flex-col gap-2">
        <Link
          href={`/${lang}/abiturients/rules-for-docs`}
          className={`${active("rules-for-docs")} ${linkClass}`}
        >
          {labels.Rules}
        </Link>
        <Link
          href={`/${lang}/abiturients/documents-for-applying`}
          className={`${active("documents-for-applying")} ${linkClass}`}
        >
          {labels.Documents}
        </Link>
        <Link
          href={`/${lang}/abiturients/applying-after-arrival`}
          className={`${active("applying-after-arrival")} ${linkClass}`}
        >
          {labels.Arrival}
        </Link>
        <Link
          href={`/${lang}/abiturients/application-for-admission`}
          className={`${active("application-for-admission")} ${linkClass}`}
        >
          {labels.Application}
        </Link>
      </nav>
    </aside>
  );
}
