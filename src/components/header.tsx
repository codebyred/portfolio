"use client"

import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {

    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <header className="
            relative z-[999]
        ">
            <motion.div className="bg-white bg-opacity-80
                fixed top-0 sm:top-6 left-1/2 min-h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[36rem]
                -translate-x-1/2
                flex items-center justify-center
                rounded-none sm:rounded-full"
                initial={{y:-100, opacity: 0}}
                animate={{y:0, opacity:100}}
            >
                <nav className="
                    h-full w-full 
                    flex sm:items-center sm:justify-center
                ">
                    <ul 
                        className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-5
                        text-[0.9rem] font-medium text-gray-500
                        w-full
                    ">
                        {
                            links.map((link)=>(
                                <motion.li 
                                    className="flex items-center justify-center relative"
                                    key={link.hash}
                                    initial={{y:-100, opacity: 0}}
                                    animate={{y:0, opacity:100}}
                                >
                                    <Link 
                                        className={
                                            cn("flex w-full items-center justify-center px-3 py-3 transition",
                                                {
                                                    'text-gray-950': activeSection === link.name
                                                }
                                            )
                                        
                                        }
                                        href={link.hash}
                                        onClick={()=> {
                                            setActiveSection(link.name);
                                            setTimeOfLastClick(Date.now())
                                        }}
                                    >
                                        {
                                            link.name === activeSection && 
                                            (<motion.span 
                                                layout
                                                className="bg-gray-100 rounded-full inset-0 absolute -z-10"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 40,
                                                }}
                                            >
                                            </motion.span>)
                                        }
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))
                        }
                    </ul>
                </nav>
            </motion.div>
        </header>
    )
    /*fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border 
    border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg 
    shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6
     sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 */
}   