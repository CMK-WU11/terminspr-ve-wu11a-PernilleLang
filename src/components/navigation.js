"use client"

// import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function Navigation () {

    const [isOpen, setIsOpen] = useState(false); 
    const handleToggle = () => setIsOpen(!isOpen);
    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // };

    // const [formState, formAction] = useActionState(login, null)

    // useEffect(function() {

    //     if (!formState) return

    //     if (!formState.success){
    //         alert("FEJL!")
    //     }

    //     if (formState.success){
    //         redirect("/favorite")
    //     }

    // }, [formState]) //dependecy array

    //Login metoden er brugt som i din mægler

    return(
        <div>
            <div className="flex justify-end mt-[3em]">
                <button onClick={handleToggle} >
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
                        <form action="" className="flex flex-col">
                            <input required type="email" placeholder="Email" name="identifier"/>
                            <input required type="password" placeholder="Password" name="password"/>
                            <button type="submit">Log Ind</button>
                        </form>
                </ul>
            </nav>
        </div>
    )
}