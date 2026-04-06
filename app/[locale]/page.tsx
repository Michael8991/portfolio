import { Header } from "@/components/Header";
import { HeroSection, AboutSection, ProjectsSection } from "./sections";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-body text-main">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
