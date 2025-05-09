"use client"

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { delay, motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }       
    })
}

export default function Skills({className}:{className?: string}) {

    const {ref} = useSectionInView("Skills", 0.5)

    return (
        <section ref={ref} id="skills" className={cn(className, "max-w-[53rem] ")}>
            <SectionHeading>Skills</SectionHeading>
            <ul className="flex flex-wrap gap-2">
                {
                    skillsData.map((skill, index)=>(
                        <motion.li 
                            key={index} 
                            className="bg-white border border-black/[0.1] text-lg rounded-xl px-5 py-3"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}