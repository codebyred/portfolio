import About from "@/components/About";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
      <main className="px-4 flex flex-col items-center justify-center">
        <Intro/>
        <SectionDivider/>
        <About/>
        <Projects/>
      </main>

  );
}
