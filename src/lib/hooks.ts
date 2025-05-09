import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0) {
    const {activeSection, timeOfLastClick, setActiveSection} = useActiveSectionContext();

    const { ref, inView } = useInView({
        threshold
    });

    useEffect(()=> {
        if(inView && (Date.now() - timeOfLastClick > 1000)) {
            setActiveSection(sectionName)
        }
    },[inView]);

    return {
        ref
    }
}