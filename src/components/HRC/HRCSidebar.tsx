// src/components/HRC/HRCSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  lang: string;
  labels: {
    Main: string;
    Presentations: string;
  };
  messages: any;
}

export default function HRCSidebar({ lang, labels, messages }: Props) {
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
        {messages.Header.HeaderList.ListTitle3 /* Adjust as needed */}
      </h2>
      <nav className="flex flex-col gap-2">
        <Link
          href={`/${lang}/hrc/main`}
          className={`${active("main")} ${linkClass}`}
        >
          {labels.Main}
        </Link>
        <Link
          href={`/${lang}/hrc/presentations`}
          className={`${active("presentations")} ${linkClass}`}
        >
          {labels.Presentations}
        </Link>
      </nav>
    </aside>
  );
}
