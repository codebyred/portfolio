"use client"
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function SectionDivider() {

    const { ref } = useSectionInView("About", 0.75)

    return (
        <motion.section 
            ref={ref}
            id="about"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            className="leading-8 text-center
                mb-28 sm:mb-40 max-w-[50rem] 
                scroll-mt-28
        ">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span>, I followed my passion for
                building impactful software by diving deep into{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is designing systems
                that are both efficient and scalable. I{" "}
                <span className="underline">enjoy</span> optimizing performance and solving real-world
                problems through clean, maintainable code. My core stack is{" "}
                <span className="font-medium">
                    Next.js, TypeScript, PostgreSQL, and Tailwind CSS
                </span>
                . I am also experienced with Rust, Docker, and automated testing tools like Cypress and JMeter.
                I love learning and experimenting with new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software developer where I can
                contribute to meaningful projects and grow alongside a passionate team.
            </p>

        </motion.section>

    )
}