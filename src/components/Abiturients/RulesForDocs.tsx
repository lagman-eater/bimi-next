export default function RulesForDocs({ messages }: { messages: any }) {
  const data = messages.Abiturients.Rules;

  return (
    <section className="w-full px-4 sm:px-10 py-10 font-pt-sans">
      {/* Title */}
      <h1 className="text-[36px] md:text-[48px] font-bold font-[Montserrat] text-[#1c41b0] mb-[30px]">
        {data.Title}
      </h1>

      {/* 6 Intro Sentences */}
      {data.List1.map((text: string, idx: number) => (
        <p
          key={idx}
          className="py-[10px] text-[16px] leading-[24px] text-justify break-words text-[#001d45]"
        >
          {"> " + text}
        </p>
      ))}

      {/* Bullet List */}
      <ul className="list-disc pl-5">
        {data.List2.map((item: string, idx: number) => (
          <li
            key={idx}
            className="py-1 text-[16px] leading-[24px] text-justify break-words text-[#001d45]"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Highlighted Sentence */}
      <p className="py-8 text-[16px] leading-[24px] text-justify break-words text-[#2857fe] font-bold">
        {data.TextBlue}
      </p>

      {/* Final 4 Sentences */}
      {data.List3.map((text: string, idx: number) => (
        <p
          key={idx}
          className="py-1 text-[16px] font-[PT_Sans] leading-[24px] text-justify break-words text-[#001d45]"
        >
          {text}
        </p>
      ))}

      {/* Last Dark Sentence */}
      <p className="text-[16px] font-[PT_Sans] leading-[24px] text-justify break-words text-[#001d45] font-bold mt-6">
        {data.TextBlack}
      </p>
    </section>
  );
}
