// src/app/[lang]/institute/normative-documents/page.tsx

import { getDictionary } from "../../dictionaries";
import NormativeDocuments from "@/components/Institute/NormativeDocuments";

export default async function NormativeDocumentsPage({
  params,
}: {
  params: { lang: "en" | "ru" | "kg" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div>
      <NormativeDocuments messages={dict} lang={params.lang} />
    </div>
  );
}
