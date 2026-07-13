import { VideoIntro } from "@/components/video-intro";
import { Hero } from "@/components/hero";
import { CredibilityBand } from "@/components/credibility-band";
import { Intro } from "@/components/intro";
import { Services } from "@/components/services";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { SiteRecordBand } from "@/components/site-record-band";
import { Legacy } from "@/components/legacy";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <VideoIntro />
      <Hero />
      <CredibilityBand />
      <Intro />
      <Services />
      <ProjectsShowcase />
      <SiteRecordBand />
      <Legacy />
      <Testimonials />
      <Contact />
    </>
  );
}
