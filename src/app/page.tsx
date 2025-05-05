import About from "@/components/About";
import Intro from "@/components/intro";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
      <main className="px-4 flex flex-col items-center justify-center">
        <Intro/>
        <SectionDivider/>
        <About/>
      </main>

  );
}
