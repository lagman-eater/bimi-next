// src/components/Institute/Administration/HeadOfDepartment.tsx

export default function HeadOfDepartment({
  messages,
  lang,
}: {
  messages: any;
  lang: "en" | "ru" | "kg";
}) {
  const heads = [
    {
      name: messages.Institute.Org.Head.List.Item1.Name,
      title: messages.Institute.Org.Head.List.Item1.Text,
      img: "/images/photo_rukov.png",
      email: "fundamental.disciplines@bimi.edu.kg"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-10 py-10">
      <div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {heads.map((head, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center transition-transform duration-300 hover:scale-[1.015]"
          >
            <div className="w-full h-[300px] mb-6 rounded-lg overflow-hidden">
              <img
                src={head.img}
                alt={head.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[22px] sm:text-[24px] font-bold font-[PT_Serif] text-[#0f2149] mb-3">
              {head.name}
            </p>
            <p className="text-[16px] sm:text-[17px] font-normal font-[PT_Sans] text-[rgb(70,70,70)]">
              {head.title}
            </p>
            {head.email && (
              <p className="text-sm font-[PT_Sans] text-gray-700">
                Email:{" "}
                <a
                  href={`mailto:${head.email}`}
                  className="text-bimi-blue hover:text-red-700 transition"
                  target="_blank"
                >
                  {head.email}
                </a>
              </p>
            )}
          </div>
          
        ))}
      </div>
    </section>
  );
}
