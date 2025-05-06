import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import React from "react";
import Project from "@/components/project"

export default function Projects() {
    return (
        <section>
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

