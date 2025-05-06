"use client"
import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <motion.div 
            className="h-16 w-1 bg-gray-200 hidden sm:block my-24"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.125}}
        >
        </motion.div>

    )
}