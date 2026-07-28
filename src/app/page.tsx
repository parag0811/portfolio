import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Features } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { MlProjects } from "@/components/sections/ml-projects";
import { Pricing } from "@/components/sections/pricing";
import { Currently } from "@/components/sections/currently";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <Experience />
      <Projects />
      <MlProjects />
      {/* <Pricing /> */}
      <Currently />
    </>
  );
}
