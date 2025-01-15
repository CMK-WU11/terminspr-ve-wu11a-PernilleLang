"use client"

import { RxCross2 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Login from "@/actions/login"
import { redirect } from "next/navigation"
import { useActionState, useEffect, useState } from "react";

export default function Navigation () {

    const [isOpen, setIsOpen] = useState(false);

    //useEffect er kopieret fra "din mægler" opgaven//
    const [formState, formAction] = useActionState(Login, null)

    useEffect(function() {
        console.log (formState)
        if (!formState) return

        if (!formState.success){
            alert("Der er desværre sket en fejl!")
        }

        if (formState.success){
            redirect("/myschedule")
        }

    }, [formState]) //dependecy array


    // Login metoden er brugt som i din mægler

    function toggleMenu() {
        console.log("clicked");
        setIsOpen(prev => !prev)
        
    }

    return(
        
        <>
        <HiMenuAlt3 onClick={toggleMenu} className="fill-slate-200" size="30px"/>
        { isOpen && 
        <div className="bg-slate-500 absolute top-0 w-[100%] h-[100%]">
            <div className="flex justify-end mt-[3em]">
                <button>
                    <RxCross2 className="fill-[#E4E4E4]" size="30px" />
                </button>
            </div>
            <nav>
                <ul className="text-[28px] flex flex-col justify-center items-center mt-[1em]">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/search">
                        <li>Search</li>
                    </Link>
                        <li>Log Ind</li>
                        <form action={formAction} method="POST" className="flex justify-center mt-[2em]">
                            <input required type="text" placeholder="User" name="username" className="w-[20%] text-[15px] ml-[0.5em]"/>
                            <input required type="password" placeholder="Password" name="password" className="w-[20%] text-[15px]"/>
                            <button type="submit" className="w-[20%] text-[15px] text-gray-400 ml-[1em]">Log Ind</button>
                        </form>
                </ul>
            </nav>
        </div>
        <h1>Godmorgen</h1>
        }
        </>
    )
}