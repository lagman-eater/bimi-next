export default function ApplicationForAdmission({ messages }: { messages: any }) {
    const data = messages.Abiturients.Appl;
  
    return (
      <section className="w-full px-4 sm:px-10 py-10 font-pt-sans">
        {/* Title */}
        <h1 className="text-[32px] font-bold font-[PT_Sans] text-[#1c41b0] mb-[20px]">
          {data.Title}
        </h1>
  
        {/* Description Text */}
        <p className="text-[16px] font-normal font-[PT_Sans] text-[#001d45] mb-[10px]">
          {data.Text}
        </p>
      </section>
    );
  }
  