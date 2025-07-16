export default function HRCPresentations({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h1 className="text-[36px] font-bold font-['PT_Sans'] text-[#001d45] mb-5">
        {title}
      </h1>
      <p className="text-[15px] font-['PT_Sans'] text-[#666] leading-6 mb-5">
        {text}
      </p>
    </div>
  );
}
