export default function ApplyingAfterArrival({ messages }: { messages: any }) {
  const data = messages.Abiturients.Arrival;

  return (
    <section className="w-full px-4 sm:px-10 py-10 font-pt-sans">
      {/* Title */}
      <h1 className="text-[#1c41b0] text-[32px] font-bold font-[PT_Sans] mb-[20px]">
        {data.Title}
      </h1>

      {/* Subtitle */}
      <p className="text-[#1c41b0] text-[16px] font-bold font-[PT_Sans] mb-4">
        {data.TextBlue}
      </p>

      {/* Paragraphs */}
      {data.List.map((text: string, idx: number) => (
        <p
          key={idx}
          className="text-[16px] font-normal leading-[30px] text-justify mt-1"
        >
          {"> " + text}
        </p>
      ))}
    </section>
  );
}
