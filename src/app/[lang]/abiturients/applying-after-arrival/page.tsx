import { getDictionary } from "@/app/[lang]/dictionaries";
import ApplyingAfterArrival from "@/components/Abiturients/ApplyingAfterArrival";

export default async function ApplyingAfterArrivalPage({
  params,
}: {
  params: any; // Use any to bypass type checking
}) {
  const messages = await getDictionary(params.lang as "en" | "ru" | "kg");
  return <ApplyingAfterArrival messages={messages} />;
}
