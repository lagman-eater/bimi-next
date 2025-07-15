"use client";

import { useState } from "react";
import Image from "next/image";
import { FiFileText } from "react-icons/fi"; // Optional: add this via `npm i react-icons`

export default function Curriculum({
  messages,
  lang,
}: {
  messages: any;
  lang: "en" | "ru" | "kg";
}) {
  const curriculum = messages.Students.Curriculum;

  const [selectedYear, setSelectedYear] =
    useState<keyof typeof curriculum.Content>("first");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const semesters = curriculum.Content[selectedYear];
  const yearLabels = curriculum.Years;
  const semLabels = curriculum.Semesters;

  const yearKeys = Object.keys(
    curriculum.Years
  ) as (keyof typeof curriculum.Content)[];
  const selectedIndex = yearKeys.indexOf(selectedYear);

  const semesterNumbers = [selectedIndex * 2 + 1, selectedIndex * 2 + 2];
  const semesterKeys = semesterNumbers.map((n) => `Sem${n}`);

  return (
    <section className="w-full px-4 sm:px-10 py-10">
      <h1 className="text-[36px] font-bold font-[PT_Sans] text-[#1c41b0] border-b border-[#1c41b0] pb-4 mb-6">
        {curriculum.Title}
      </h1>
      <p className="mb-6 text-gray-700 text-[18px]">{curriculum.Text}</p>

      <div className="w-full mb-8">
        <Image
          src={
            lang === "ru"
              ? "/images/students-img1.png"
              : "/images/students-img2.png"
          }
          alt="Curriculum"
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Year Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(yearLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              setSelectedYear(key as keyof typeof curriculum.Content);
              setOpenItems({});
            }}
            className={`px-4 py-2 rounded font-semibold text-sm sm:text-base transition ${
              selectedYear === key
                ? "bg-bimi-blue text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {label as string}
          </button>
        ))}
      </div>

      {/* Semesters */}
      <div className="space-y-10">
        {semesterKeys.map((semKey) => (
          <div key={semKey}>
            <h2 className="text-[24px] font-semibold font-[PT_Serif] text-[#0f2149] mb-4">
              {semLabels[semKey as keyof typeof semLabels]}
            </h2>

            <div className="space-y-4">
              {semesters[semKey as keyof typeof semesters]?.map(
                (
                  subject: {
                    title: string;
                    pdf?: string;
                    details: { title: string; description: string }[];
                  },
                  idx: number
                ) => {
                  const key = `${semKey}-${idx}`;
                  const isOpen = openItems[key];

                  return (
                    <div
                      key={key}
                      className="border border-gray-300 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold text-[18px] flex justify-between items-center"
                      >
                        <span>{subject.title}</span>
                        {subject.pdf && (
                          <a
                            href={subject.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="ml-2 text-bimi-blue hover:text-blue-800"
                            title="Open PDF"
                          >
                            <FiFileText size={20} />
                          </a>
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 py-3 bg-white space-y-3">
                          {subject.details.map(
                            (
                              item: { title: string; description: string },
                              i: number
                            ) => (
                              <div key={i}>
                                <p className="text-[16px] text-gray-700">
                                  <span className="font-semibold">
                                    {item.title}
                                  </span>
                                  {": "}
                                  {item.description}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
