import { Header } from "@/components/Header";
import { HeroSection, AboutSection, ProjectsSection } from "./sections";
import { Footer } from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div
      className="
        bg-white
      "
    >
      <Header />
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
      <AboutSection />
      <Footer />
    </div>
  );
}
