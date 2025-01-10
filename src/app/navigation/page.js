// import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

export default function Navigation () {

    // const [isOpen, setIsOpen] = useState(false); 
    // const handleToggle = () => setIsOpen(!isOpen);
    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // };

    return(
        // <nav onClick={handleToggle}>
        <div>
            <div className="flex justify-end mt-[3em] mr-[2em]">
                <RxCross2 className="fill-[#E4E4E4]" size="30px" />
            </div>
            <nav>
                <ul className="text-[62px] flex flex-col justify-center items-center w-[50vh] mt-[1em]">
                    <Link href="/home">
                        <li>Home</li>
                    </Link>
                    <Link href="/search">
                        <li>Search</li>
                    </Link>
                    <li>Log In</li>
                </ul>
            </nav>
        </div>
    )
}