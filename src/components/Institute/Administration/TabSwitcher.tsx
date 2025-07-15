"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabSwitcherProps {
  lang: string;
  labels: {
    Management: string;
    Administration: string;
    HeadOfDepartment: string;
  };
}

export default function TabSwitcher({ lang, labels }: TabSwitcherProps) {
  const pathname = usePathname();

  const activeTab = pathname?.includes("/management")
    ? "management"
    : pathname?.includes("/head-of-department")
    ? "head-of-department"
    : "staff";

  const tabClass = (tab: string) =>
    tab === activeTab
      ? "text-bimi-blue border-b-2 border-bimi-blue font-bold pb-2 text-sm sm:text-base md:text-lg font-pt-sans"
      : "text-gray-700 hover:text-bimi-blue pb-2 text-sm sm:text-base md:text-lg font-pt-sans";

  const getActiveLabel = () => {
    switch (activeTab) {
      case "management":
        return labels.Management;
      case "head-of-department":
        return labels.HeadOfDepartment;
      case "staff":
      default:
        return labels.Administration;
    }
  };

  return (
    <div className="mb-6">
      <h1 className="text-[35px] font-[PT_Serif] text-bimi-dark-blue font-bold mb-4">
        {getActiveLabel()}
      </h1>
      <nav className="flex gap-8 border-b border-gray-300">
        <Link
          href={`/${lang}/institute/administration/management`}
          className={tabClass("management")}
        >
          {labels.Management}
        </Link>
        <Link
          href={`/${lang}/institute/administration/staff`}
          className={tabClass("staff")}
        >
          {labels.Administration}
        </Link>
        <Link
          href={`/${lang}/institute/administration/head-of-department`}
          className={tabClass("head-of-department")}
        >
          {labels.HeadOfDepartment}
        </Link>
      </nav>
    </div>
  );
}
