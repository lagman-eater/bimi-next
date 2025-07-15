export default function DocumentsForApplying({ messages }: { messages: any }) {
  const data = messages.Abiturients.Docs;

  return (
    <section className="w-full px-4 sm:px-10 py-10 font-pt-sans">
      {/* Main Title */}
      <h1 className="text-[32px] font-bold font-[Montserrat] text-[#1c41b0] mb-4">
        {data.Upper.Title}
      </h1>

      {/* Subtext */}
      <p className="text-[#1c41b0] text-[16px] font-[PT_Sans] mb-4">
        {data.Upper.Text}
      </p>

      <p className="text-[16px] font-normal text-[#001d45] leading-[24px] text-justify mt-4">
        {"> " + data.Upper.List.Item1}
      </p>
      <p className="text-[16px] font-normal text-[#001d45] leading-[24px] text-justify mt-2">
        {"> " + data.Upper.List.Item2}
      </p>
      <p className="text-[16px] font-normal text-[#001d45] leading-[24px] text-justify mt-2">
        {"> " + data.Upper.List.Item3}
      </p>

      {/* Spacer + Second Title */}
      <h2 className="text-[24px] font-bold font-[Montserrat] text-[#1c41b0] mt-10 mb-2">
        {data.Middle.Title}
      </h2>

      {/* 7 Sentences */}
      {data.Middle.List.map((text: string, idx: number) => (
        <p
          key={idx}
          className="text-[16px] font-normal leading-[30px] text-justify mt-2"
        >
          {"> " + text}
        </p>
      ))}

      {/* Highlighted Sentence */}
      <p className="text-[#1c41b0] text-[16px] font-[PT_Sans] mt-4 font-bold">
        {data.Middle.TextBlack}
      </p>

      {/* Spacer + Third Title */}
      <h2 className="text-[22px] font-bold font-[Montserrat] text-[#001d45] mt-[10%] mb-2">
        {data.Bottom.Title}
      </h2>

      {/* 4 Final Sentences */}
        <p
          className="text-[16px] font-bold text-[#1c41b0] font-[Montserrat] py-[10px]"
        >
          {data.Bottom.Tel} +996 997 887 887
        </p>
        <a
          className="text-[16px] font-bold text-[#1c41b0] font-[Montserrat] py-[10px]"
          href="mailto:bimi.edu.kg@gmailcom"
        >
          {data.Bottom.Mail}  bimi.edu.kg@gmailcom
        </a>
        <p
          className="text-[16px] font-bold text-[#1c41b0] font-[Montserrat] pt-[10px]"
        >
          {data.Bottom.TextBlue}:
        </p>
        <p
          className="text-[16px] font-bold font-[Montserrat]"
        >
          {data.Bottom.Text}
        </p>
        <p
          className="text-[16px] font-bold font-[Montserrat] py-[10px]"
        >
          {data.Bottom.TextLink} {data.Bottom.Adress}
        </p>
    </section>
  );
}
