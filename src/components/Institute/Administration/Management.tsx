// src/components/Institute/Administration/Management.tsx

import Image from "next/image";

interface ManagementProps {
  messages: any;
  lang: "en" | "ru" | "kg";
}

export default function Management({ messages, lang }: ManagementProps) {
  const members = [
    {
      name: messages.Institute.Org.Man.List.Item1.Name,
      title: messages.Institute.Org.Man.List.Item1.Text,
      img: "/images/ildar_sam_resized.JPG",
    },
    {
      name: messages.Institute.Org.Man.List.Item2.Name,
      title: messages.Institute.Org.Man.List.Item2.Text,
      email: "rector@bimi.edu.kg",
      moreLink: "/en/institute/rector_eng",
      img: "/images/rector.png",
    },
    {
      name: messages.Institute.Org.Man.List.Item3.Name,
      title: messages.Institute.Org.Man.List.Item3.Text,
      email: "vice.rector@bimi.edu.kg",
      img: "/images/vice-rector.png",
    },
    {
      name: messages.Institute.Org.Man.List.Item4.Name,
      title: messages.Institute.Org.Man.List.Item4.Text,
      img: "/images/orgMan4.png",
    },
  ];
  return (
    <section className="bg-white rounded-lg shadow-sm py-10 px-4 sm:px-8">
      <div className="border-l-4 border-bimi-dark-blue pl-6 space-y-12">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 items-center border-b border-bimi-dark-blue pb-6"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay={200 + index * 100}
          >
            <div className="relative w-[275px] h-[295px] overflow-hidden rounded-lg shadow">
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 275px"
                className="object-cover object-center rounded-lg shadow"
              />
            </div>

            <div className="flex-1 space-y-2">
              <h2 className="text-[28px] font-[PT_Serif] text-bimi-dark-blue font-bold">
                {member.name}
              </h2>
              <p className="text-gray-700 text-[16px] font-[PT_Sans]">
                {member.title}
              </p>

              {member.email && (
                <p className="text-sm font-[PT_Sans] text-gray-700">
                  Email:{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-bimi-blue hover:text-red-700 transition"
                    target="_blank"
                  >
                    {member.email}
                  </a>
                </p>
              )}

              {member.moreLink && (
                <a
                  href={member.moreLink}
                  className="text-bimi-blue hover:text-red-700 font-[PT_Sans] text-sm underline"
                >
                  More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
