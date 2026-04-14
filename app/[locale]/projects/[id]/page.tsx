import HeaderProject from "@/components/Header/HeaderProject";
import { DocPage } from "@/components/docs/DocPage";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  return (
    <div className="container mx-auto max-w-8xl px-4 py-8 text-slate-800 md:px-8 flex flex-col items-center ">
      <HeaderProject locale={locale} />
      <DocPage id={id} />
    </div>
  );
}
