import { Hero } from "@/components/hero";
import { CredibilityBand } from "@/components/credibility-band";
import { Intro } from "@/components/intro";
import { Services } from "@/components/services";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { Legacy } from "@/components/legacy";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <Intro />
      <Services />
      <ProjectsShowcase />
      <Legacy />
      <Testimonials />
      <Contact />
    </>
  );
}
