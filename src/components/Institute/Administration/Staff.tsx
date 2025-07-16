// src/components/Institute/Administration/Staff.tsx

import Image from "next/image";

interface StaffProps {
  messages: any;
  lang: "en" | "ru" | "kg";
}

export default function Staff({ messages, lang }: StaffProps) {
  const staffMembers = [
    {
      name: messages.Institute.Org.Adm.List.Item1.Name,
      post: messages.Institute.Org.Adm.List.Item1.Text,
      img: "/images/orgAdm1.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item2.Name,
      post: messages.Institute.Org.Adm.List.Item2.Text,
      img: "/images/orgAdmZh.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item6.Name,
      post: messages.Institute.Org.Adm.List.Item6.Text,
      img: "/images/orgAdm6.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item3.Name,
      post: messages.Institute.Org.Adm.List.Item3.Text,
      img: "/images/nurzat.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item8.Name,
      post: messages.Institute.Org.Adm.List.Item8.Text,
      img: "/images/saltanat.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item4.Name,
      post: messages.Institute.Org.Adm.List.Item4.Text,
      img: "/images/orgAdm4.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item5.Name,
      post: messages.Institute.Org.Adm.List.Item5.Text,
      img: "/images/orgAdm5.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item7.Name,
      post: messages.Institute.Org.Adm.List.Item7.Text,
      img: "/images/orgAdm7.png",
    },
    {
      name: messages.Institute.Org.Adm.List.Item9.Name,
      post: messages.Institute.Org.Adm.List.Item9.Text,
      img: "/images/orgAdm9.png",
    },
  ];
  return (
    <section className="w-full px-4 sm:px-10 py-10">
      <div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 lg:p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="w-full h-[250px] md:h-[270px] lg:h-[300px] overflow-hidden rounded-lg">
              <img
                src={staff.img}
                alt={staff.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[18px] sm:text-[20px] font-bold font-[PT_Serif] text-[#0f2149] mt-4 mb-2">
              {staff.name}
            </p>
            <p className="text-[15px] sm:text-[16px] font-normal font-[PT_Sans] text-[rgb(70,70,70)] pt-1">
              {staff.post}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
