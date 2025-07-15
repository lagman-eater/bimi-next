interface Props {
  messages: any;
  lang: "en" | "ru" | "kg";
}

export default function Life({ messages }: Props) {
  const content = messages.Students.Life;

  return (
    <section className="text-gray-800 leading-relaxed">
      <h1 className="text-[36px] font-bold font-[PT_Sans] text-[#1c41b0] border-b border-[#1c41b0] pb-4 mb-6">
        {content.Title}
      </h1>
      <p className="text-[24px] font-bold text-[#666] w-fit">{content.Text}</p>
    </section>
  );
}
