export default function HRCMain({
  title,
  text1,
  text2,
}: {
  title: string;
  text1: string;
  text2: string;
}) {
  return (
    <div>
      <h1 className="text-[36px] font-bold font-['PT_Sans'] text-[#001d45] mb-5">
        {title}
      </h1>
      <p className="text-[15px] font-['PT_Sans'] text-[#666] leading-6 mb-5">
        {text1}
      </p>
      <p className="text-[15px] font-['PT_Sans'] text-[#666] leading-6 mb-5">
        {text2}
      </p>
    </div>
  );
}
