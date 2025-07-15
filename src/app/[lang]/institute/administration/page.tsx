// src/app/[lang]/institute/administration/page.tsx
import { redirect } from "next/navigation";

export default function AdministrationRedirect({
  params,
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  redirect(`/${params.lang}/institute/administration/management`);
}
