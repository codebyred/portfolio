"use client"

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {

    const { ref } = useSectionInView("Contact");

    return (
        <motion.section ref={ref} id="contact" 
            className="scroll-mt-28 text-center"
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className="-mt-6">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:nazmulhaqueredoan@gmail.com">nazmulhaqueredoan@gmail.com</a>
                {" "} or through this form
            </p>
            <form className="flex flex-col gap-2 mt-10">
                <input className="borderBlack rounded-lg h-14 px-4" placeholder="Your email"></input>
                <textarea className="borderBlack rounded-lg h-52 p-4" placeholder="Your message"></textarea>
                <button 
                    type="submit" 
                    className="focus:scale-110 hover:scale-110 active:scale-105 transition-all bg-gray-900 hover:bg-gray-950 text-white outline-none flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full group"
                >
                    Submit<FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1 opcaity-70"/>
                </button>
            </form>
        </motion.section>
    )
}