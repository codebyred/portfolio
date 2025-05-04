"use client"

import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from "next/link"

export default function Header() {
    return (
        <header className="
            relative z-[999]
        ">
            <motion.div className="bg-white bg-opacity-80
                fixed top-0 sm:top-6 left-1/2 h-[4.5rem] sm:h-[3.25rem] w-full sm:w-[36rem]
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
                    <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-5
                        text-[0.9rem] font-medium text-gray-500
                        w-full
                    ">
                        {
                            links.map((link)=>(
                                <motion.li 
                                    className="flex items-center justify-center"
                                    key={link.hash}
                                    initial={{y:-100, opacity: 0}}
                                    animate={{y:0, opacity:100}}
                                >
                                    <Link 
                                        className="flex w-full items-center justify-center sm:px-3 sm:py-3 hover:text-gray-950 transition"
                                        href={link.hash}
                                    >
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