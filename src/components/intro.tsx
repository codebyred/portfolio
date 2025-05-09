"use client"

import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { HiDownload } from "react-icons/hi";


export default function Intro({className}:{className?: string}) {
    
    const { ref } = useSectionInView("Home", 0.5);

    return (
        <section ref={ref} id="home" className={cn(className,"max-w-[50rem] text-center scroll-mt-[100rem]")}>
            <div className="
                flex flex-col items-center justify-center
            ">
                <motion.div 
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity:1, scale: 1}}
                    className="rounded-full relative">
                    <Link
                        href={"/redoan_11.png"}
                    >
                       
                        <Image
                            src={"/redoan_11.png"}
                            alt={"Redoan"}
                            width={192}
                            height={192}
                            priority={true}
                            className="rounded-full h-24 w-24 
                            object-cover border-[0.35rem] border-white"
                        />
                        <motion.span 
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-18 right-0">
                            <GoDotFill 
                            
                                className="text-green-400 h-8 w-8"
                            />
                        </motion.span>
                    </Link>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0}}
                    className="px-4 mb-10 mt-4 font-medium  !leading-[1.5] text-2xl sm:text-4xl">
                    <span className="font-bold">Hello, I'm Redoan.</span> I'm a {" "}
                    <span className="font-bold">Full-Stack Developer</span> with {" "}
                    <span className="font-bold">1 year </span> of experience. I enjoy
                    building websites & applications. My focus is Reactjs & Rust
                </motion.h1>
                
                <motion.div 
                    initial={{opacity:0, y: 100}}
                    animate={{opacity:1, y: 0}}
                    className="text-lg font-medium
                    flex flex-col sm:flex-row gap-2
                    px-4
                ">
                    <Link
                        href={"#contact"}
                        className="flex items-center justify-center gap-2 
                        bg-gray-900 text-white rounded-full outline-none
                        px-7 py-3
                        group focus:scale-110 hover:scale-110 active:scale-105 transition"
                    >
                        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 trasnsition"/>
                    </Link>
                    <a 
                        download={true}
                        href="/MD_NAZMUL_HAQUE_REDOAN_CV.pdf"
                        className="flex items-center justify-center gap-2 
                        bg-white text-gray-900 rounded-full outline-none border border-black/10
                        px-7 py-3
                        group focus:scale-110 hover:scale-110 active:scale-105 transition
                    ">
                        Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 trasnsition"/>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/md-nazmul-haque-redoan-b12a342a7/"
                        target="_blank"
                        className="self-center flex items-center justify-center
                        bg-white text-gray-700 rounded-full outline-none border border-black/10
                        p-4 w-fit h-fit
                        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition
                    ">
                        <BsLinkedin/>
                    </a>
                    <a 
                        href="https://github.com/codebyred"
                        target="_blank"
                        className="self-center flex items-center justify-center
                        bg-white text-gray-700 rounded-full outline-none border border-black/10
                        p-4 w-fit h-fit
                        focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition
                    ">
                        <BsGithub/>
                    </a>
                </motion.div>

            </div>
        </section>
    )
}