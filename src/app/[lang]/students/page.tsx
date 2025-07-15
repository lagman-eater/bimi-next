import { redirect } from "next/navigation";

export default function StudentsRedirect({
  params: { lang },
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  redirect(`/${lang}/students/point-rating`);
}
