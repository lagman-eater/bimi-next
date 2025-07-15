"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../public/images/logo.png";
import downArrow from "../../public/images/down_but_svg.svg";

export default function Header({ messages }: { messages: any }) {
  const dict = messages.Header;
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const lang = pathname?.split("/")[1] || "en";
    setCurrentLang(lang);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    const segments = pathname?.split("/").slice(2).join("/");
    const newPath = `/${lang}${segments ? `/${segments}` : ""}`;
    router.push(newPath);
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      title: dict.HeaderList.ListTitle1,
      items: [
        {
          label: dict.HeaderList.List1.Item1,
          href: `/${currentLang}/institute/normative-documents`,
        },
        {
          label: dict.HeaderList.List1.Item2,
          href: `/${currentLang}/institute/administration`,
        },
        {
          label: dict.HeaderList.List1.Item4,
          href: `/${currentLang}/institute/bimi`,
        },
        {
          label: dict.HeaderList.List1.Item5,
          href: `/${currentLang}/institute/news`,
        },
      ],
    },
    {
      title: dict.HeaderList.ListTitle2,
      items: [
        // {
        //   label: dict.HeaderList.List2.Item1,
        //   href: `/${currentLang}/students/schedule`,
        // },
        {
          label: dict.HeaderList.List2.Item2,
          href: `/${currentLang}/students/point-rating`,
        },
        {
          label: dict.HeaderList.List2.Item3,
          href: `/${currentLang}/students/life`,
        },
        {
          label: dict.HeaderList.List2.Item4,
          href: `/${currentLang}/students/curriculum`,
        },
        {
          label: dict.HeaderList.List2.Item5,
          href: `/${currentLang}/students/questionnaire`,
        },
        // {
        //   label: dict.HeaderList.List2.Item6,
        //   href: `/${currentLang}/students/avn`,
        // },
      ],
    },
    {
      title: dict.HeaderList.ListTitle3,
      href: `/${currentLang}/abiturients/rules-for-docs`,
      items: [
        {
          label: dict.HeaderList.List3.Item1,
          href: `/${currentLang}/abiturients/rules-for-docs`,
        },
        {
          label: dict.HeaderList.List3.Item2,
          href: `/${currentLang}/abiturients/documents-for-applying`,
        },
        {
          label: dict.HeaderList.List3.Item3,
          href: `/${currentLang}/abiturients/applying-after-arrival`,
        },
        {
          label: dict.HeaderList.List3.Item4,
          href: `/${currentLang}/abiturients/application-for-admission`,
        },
      ],
    },
    {
      title: dict.HeaderList.ListTitle4,
      href: `/${currentLang}/scientific-activities`,
    },
    { title: dict.HeaderList.ListTitle5, href: `/${currentLang}/contacts` },
  ];

  return (
    <header className="sticky top-0 z-[21] bg-white shadow-header flex flex-col py-2 xl:py-1">
      <div className="px-4 xl:px-2 flex items-center justify-between w-full">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 text-bimi-blue font-bold">
          <Link href={`/${currentLang}`}>
            <Image
              src={logo}
              alt="Medical Institute Logo"
              width={48}
              height={48}
              className="w-12 h-12 xl:w-8 xl:h-8 object-contain mr-2 cursor-pointer"
            />
          </Link>
          <div>
            <p className="text-base xl:text-sm">{dict.HeaderTitle1}</p>
            <p className="text-sm xl:text-xs">{dict.HeaderTitle2}</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8 xl:space-x-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative uppercase text-sm xl:text-base font-bold text-bimi-dark-blue hover:text-bimi-blue transition-colors duration-300 group mx-6"
              >
                {item.href ? (
                  <Link href={item.href} className="cursor-pointer">
                    {item.title}
                  </Link>
                ) : (
                  <span className="cursor-pointer">{item.title}</span>
                )}
                {item.items && (
                  <>
                    <Image
                      src={downArrow}
                      alt="Down Arrow"
                      width={12}
                      height={12}
                      className="absolute top-[7px] xl:top-[10px] right-[-15px] transition-transform duration-300 group-hover:rotate-180 xl:group-hover:top-[3.5px] xl:group-hover:top-[0.5px]"
                    />
                    <ul className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white w-max font-pt-sans text-[1.3vw] xl:text-[1vw] font-medium">
                      {item.items.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-[2.5vh] px-[1vw] hover:bg-bimi-hover-blue hover:text-white transition-colors duration-100"
                        >
                          <Link
                            href={subItem.href}
                            className="text-black hover:text-white no-underline"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Container (Languages and Burger) */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher for Mobile (Shown Below 1024px) */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              className={`text-lg font-montserrat ${
                currentLang === "ru"
                  ? "font-bold text-bimi-blue"
                  : "text-gray-600 hover:text-bimi-blue"
              }`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={`text-lg font-montserrat ${
                currentLang === "en"
                  ? "font-bold text-bimi-blue"
                  : "text-gray-600 hover:text-bimi-blue"
              }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={`text-lg font-montserrat ${
                currentLang === "kg"
                  ? "font-bold text-bimi-blue"
                  : "text-gray-600 hover:text-bimi-blue"
              }`}
              onClick={() => changeLanguage("kg")}
            >
              KG
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden z-[22]" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-bimi-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Language Switcher (Hidden on Mobile, Shown on Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 mr-4 xl:mr-2">
            <button
              className={`text-lg xl:text-base font-montserrat ${
                currentLang === "ru"
                  ? "font-bold text-bimi-blue"
                  : "text-gray-600 hover:text-bimi-blue"
              }`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={`text-lg xl:text-base font-montserrat ${
                currentLang === "en"
                  ? "font-bold text-bimi-blue"
                  : "text-gray-600 hover:text-bimi-blue"
              }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={`text-lg xl:text-base font-montserrat ${
                currentLang === "kg"
                  ? "font-bold text-bimi-blue"
                  : "text-gray-600 hover:text-bimi-blue"
              }`}
              onClick={() => changeLanguage("kg")}
            >
              KG
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-0 left-0 w-full bg-[#F5F6FA] shadow-md border-b-r-[25px] p-4 z-[21]">
          <ul className="list-none space-y-2">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200 py-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block text-[2.5vw] uppercase font-bold text-bimi-dark-blue no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span className="block text-[2.5vw] uppercase font-bold text-bimi-dark-blue">
                    {item.title}
                  </span>
                )}
                {item.items && (
                  <ul className="list-none pl-4 mt-2">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1 hover:bg-gray-400">
                        <Link
                          href={subItem.href}
                          className="block text-[1.5vw] text-[#023072] no-underline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
