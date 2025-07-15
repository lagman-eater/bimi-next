// src/components/Students/PointRating.tsx

interface Props {
  messages: any;
  lang: "en" | "ru" | "kg";
}

export default function PointRating({ messages }: Props) {
  const content = messages.Students.PointRating;

  return (
    <section className="text-gray-800 leading-relaxed">
      <h1 className="text-[36px] font-bold font-[PT_Sans] text-[#1c41b0] border-b border-[#1c41b0] pb-4 mb-6">
        {content.Title}
      </h1>
      <a
        href="/pdf/БРС.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[20px] font-bold text-[#2857fe] hover:underline"
      >
        {content.Text} 
      </a>
    </section>
  );
}
