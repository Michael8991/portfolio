import { Header } from "@/components/Header";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "./sections";

export default function Home() {
  return (
    <div className="bg-body text-main">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
