"use client"

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Project from "@/components/project"
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export default function Projects({className}:{className?: string}) {

    const { ref } = useSectionInView("Projects", 0);
 
    return (
        <section ref={ref} id="projects" className={cn(className)}>
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

