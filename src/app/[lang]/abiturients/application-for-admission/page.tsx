import { getDictionary } from "@/app/[lang]/dictionaries";
import ApplicationForAdmission from "@/components/Abiturients/ApplicationForAdmission";
import { NextPage } from "next";

interface PageProps {
  params: Promise<{ lang: "en" | "ru" | "kg" }>;
}

const ApplicationForAdmissionPage: NextPage<PageProps> = async ({ params }) => {
  const resolvedParams = await params; // Await the params
  const messages = await getDictionary(resolvedParams.lang);
  return <ApplicationForAdmission messages={messages} />;
};

export default ApplicationForAdmissionPage;
