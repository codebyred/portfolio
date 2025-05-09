"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React, { useEffect } from "react";
import Project from "@/components/project"
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {



    const { ref } = useSectionInView("Projects", 0);

    
    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>Projects</SectionHeading>
            <div>
            {
                projectsData.map((data, index)=>(
                    <React.Fragment key={index}>
                        <Project {...data}/>
                    </React.Fragment>
                ))
            }
            </div>
        </section>
    )
}

