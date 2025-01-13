import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function mySchedule () {

    return(
        <section>
            <div className="pt-[5em] pl-[2em] pr-[2em] flex justify-between">
                <Link href="/home">
                    <p className="flex text-[#F4A88E]"><BiSolidLeftArrow className="fill-[#F4A88E]" size="15px"/>Back</p>
                </Link>
                <HiMenuAlt3 className="fill-slate-200" size="30px"/>
            </div>
            <h2 className="text-[50px] mb-[1em] ml-[0.5em]">My Schedule</h2>
            <div className="p-[1em] ml-[0.5em]">
                <div className="flex justify-between">
                    <p>Monday</p>
                    <p>19.30</p>
                </div>
                <p className="text-[28px] border-b-2 border-dashed">Flow Yoga Workout</p>
            </div>
            <div className="ml-[0.5em] p-[1em]">
                <div className="flex justify-between">
                    <p>Wednesday</p>
                    <p >17.00</p>
                </div>
                <p className="text-[28px] border-b-2 border-dashed">Lower Abs Workout</p>
            </div>
        </section>            
    )
}