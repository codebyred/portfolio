"use client"

import Image from "next/image"
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectData = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl }: ProjectData) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.66, 1]);

    return (
        <motion.div
            ref={ref}
            className="mb-3 sm:mb-10 group"
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <section 

                className="  overflow-hidden bg-gray-100 hover:bg-gray-200 border border-black/5 rounded-lg relative
                max-w-[42rem] sm:h-[20rem] p-8  last:mb-0 transition
            ">
                <div className="sm:max-w-[50%] h-full flex flex-col pr-8 sm:group-even:ml-[20rem]">
                    <h3 className="text-2xl semi-bold">{title}</h3>
                    <p className="mt-2">{description}</p>
                    <ul className="flex flex-wrap gap-2 mt-4 py-6">
                        {
                            tags.map((tag, index) => (
                                <li
                                    className="bg-black/[0.7] rounded-full px-3 py-1
                                text-[0.73rem] uppercase tracking-wider text-white
                                "
                                    key={index}>{tag}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt="image of projects"
                    quality={95}
                    className="absolute top-8 -right-40 group-even:right-[intial] group-even:-left-40 hidden sm:block
                w-[28.25rem] rounded-t-lg 
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-even:group-hover:translate-x-3 
                group-even:group-hover:rotate-2
                group-hover:translate-y-3 
                group-hover:-rotate-2 transition
            "/>
            </section>
        </motion.div>
    )
}