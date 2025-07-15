import { getDictionary } from "@/app/[lang]/dictionaries";
import Contacts from "@/components/Contacts/Contacts";

export default async function ContactsPage({
  params,
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const messages = await getDictionary(params.lang);
  return <Contacts messages={messages} />;
}
