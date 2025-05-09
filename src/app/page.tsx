import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
      <main className="px-4 flex flex-col items-center justify-center">
        <Intro className="mb-28 sm:mb-0"/>
        <SectionDivider/>
        <About className="mb-28 sm:mb-40 scroll-mt-28"/>
        <Projects className="scroll-mt-28"/>
        <Skills className="mb-28 sm:mb-40 scroll-mt-28"/>
      </main>

  );
}
