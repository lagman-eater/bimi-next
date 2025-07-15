export default function Questionnaire({ messages }: { messages: any }) {
  const data = messages.Students.Ques;

  return (
    <section className="w-full px-4 sm:px-10 py-10">
      {/* Main title */}
      <h1 className="text-[36px] font-bold font-[PT_Sans] text-[#1c41b0] border-b border-[#1c41b0] pb-4 mb-6 font-pt-sans">
        {data.Title}
      </h1>

      {/* Mini Title 1 */}
      <h2 className="text-[18px] font-bold text-center mb-5">
        {data.TitleBlack}
      </h2>

      {/* Mini Title 2 */}
      <h2 className="text-[18px] font-bold text-center mb-5">
        {data.TitleBlack2}
      </h2>

      {/* Description */}
      <p className="text-[16px] leading-relaxed mb-6">
        {data.Text1}
        <br />
        {data.Text2}
        <br />
        {data.Text3}
        <br />
        {data.Text4}
        <br />
        {data.Text5}
      </p>

      {/* Bullet list with external links */}
      <ul className="list-disc ml-6 space-y-2 marker:text-[#1c41b0]">
        <li>
          <a
            href="https://forms.gle/FsMgkA8iotykzp1N7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c41b0] font-bold text-[16px] underline-offset-2 hover:underline"
          >
            {data.Student.TitleBlack}
          </a>
        </li>
        <li>
          <a
            href="https://forms.gle/149MLbXwzehS4BoVA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1c41b0] font-bold text-[16px] underline-offset-2 hover:underline"
          >
            {data.Teacher.TitleBlack}
          </a>
        </li>
      </ul>

      {/* Final messages */}
      <h2 className="text-[18px] font-bold text-center my-5">
        {data.Student.TextBlack2}
      </h2>
      <h2 className="text-[18px] font-bold text-center mb-5">
        {data.Student.TextThanks}
      </h2>
    </section>
  );
}
