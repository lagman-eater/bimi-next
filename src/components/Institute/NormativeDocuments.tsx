// src/components/Institute/NormativeDocuments.tsx

import Image from "next/image";

export default function NormativeDocuments({
  messages,
  lang,
}: {
  messages: any;
  lang: "en" | "ru" | "kg";
}) {
  const dict = messages.Institute;

  const docs = [
    {
      href: "/pdf/Устав БММИ.pdf",
      img: "/images/normativesEng-img1.png",
    },
    {
      href: "/pdf/Стратегия развития и стратегический план БММИ на 2022-2026 годы.pdf",
      img: "/images/normativesEng-img2.png",
    },
    {
      href: "/pdf/Лицензия.pdf",
      img: "/images/normativesEng-img3.png",
    },
    {
      href: "/pdf/Програмная аккредитация.pdf",
      img: "/images/program-accreditation.png",
    },
    {
      href: "/pdf/Институциональная аккредитация.pdf",
      img: "/images/internatianal-accreditation.png",
    },
    {
      href: "/pdf/iso-all.pdf",
      img: "/images/ISO1.png",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-10 py-12">
      <div
        className="mb-10"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <h1 className="text-[35px] font-bold font-[PT_Serif] leading-[62px] text-bimi-blue">
          {dict.Bread.Title1}
        </h1>
      </div>

      <div
        className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 mb-24"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="350"
      >
        {docs.map((doc, index) => (
          <a
            key={index}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-40"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={doc.img}
              alt={`Document ${index + 1}`}
              className="w-full rounded-[25px]"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
