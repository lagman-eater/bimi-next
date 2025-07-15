import { getDictionary } from "../dictionaries";

export default async function ScientificIndex({
  params,
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(params.lang);
  return (
    <div className="w-full px-4 sm:px-10 py-10 font-pt-sans">
      <h1 className="text-[36px] font-bold text-center text-[#1c41b0]">
        {messages.Students.Life.Text}
      </h1>
    </div>
  );
}
