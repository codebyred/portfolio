"use client"

import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import type { Theme } from "@/lib/types"


export default function ThemeSwitch() {

    const [theme, setTheme] = useState<Theme>("Light");

    const handleClick = () => {

        if(theme === "Light") {
            setTheme("Dark")
            window.localStorage.setItem("theme", "Dark");
            window.document.documentElement.classList.add("dark")
        }else {
            setTheme("Light") 
            window.localStorage.setItem("theme", "Light");
            window.document.documentElement.classList.remove("dark")
        }
        
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme") as Theme | null;


        if(localTheme) {
            setTheme(localTheme)
            if(localTheme === "Dark") {
                window.document.documentElement.classList.add("dark")
            }
        }else if(window.matchMedia("(prefers-color-scheme): dark").matches){
            setTheme("Dark")
            window.document.documentElement.classList.add("dark")
        }
    },[theme])


    return (
        <button className="h-[3rem] w-[3rem] rounded-full flex items-center justify-center fixed bottom-5 right-5
            bg-primary-btn shadow-2xl  backdrop-blur-[0.5rem] border border-white border-opacity-40
            hover:scale-[1.15] transition-all active:scale-105 "
            onClick={()=> handleClick()}
        >
            {theme === "Light"?<BsMoon/>:<BsSun/>}
        </button>
    )
}