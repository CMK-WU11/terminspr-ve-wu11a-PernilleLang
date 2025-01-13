import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidLeftArrow } from "react-icons/bi";
import placeholder from "../../../../public/center.jpg";

export default async function classDetails ( {params} ) {

    const {id} = params

    console.log("params id", id);

    const responseDetails = await fetch(
        `http://localhost:4000/api/v1/classes`
    );

    const details = await responseDetails.json();
    
    console.log("details", details);

    return(
        <section>
                <article className="relative bg-[url('/background.jpg')] bg-cover bg-center h-[75vh] w-[100vw] flex flex-col justify-between">
                    <div className="pt-[5em] pl-[2em] pr-[2em] flex justify-between">
                        <Link href="/home">
                            <p className="flex text-[#F4A88E]"><BiSolidLeftArrow className="fill-[#F4A88E]" size="15px"/>Back</p>
                        </Link>
                        <HiMenuAlt3 className="fill-slate-200" size="30px"/>
                    </div>
                    <div className="flex">
                        <h2 className="text-[50px] w-[5em] text-white ml-[0.5em] pb-[0.5em]">{details.className}</h2>
                        <Link href="" className="bg-white w-[40%] h-[3em] mt-[1.3em] text-3xl border rounded-l-lg flex justify-center">
                            <button>Sign Up</button>
                        </Link> 
                    </div>
                </article>
                <article className="ml-[1em] mr-[1.5em]">
                    <h3 className="text-[50px] pt-[0.5em]">Schedule</h3>
                    <div className="flex justify-between ml-[0.5em]">
                        <p>{details.classDay}</p>
                        <p>{details.classTime}</p>
                    </div>
                    <div className="ml-[0.5em] mt-[2em]">
                        <p className="text-[20px]">
                           {details.classDescription}
                        </p>
                    </div>
                    <div className="mb-[10em]">
                        <h4 className="text-[50px] pt-[1em]">Trainer</h4>
                        <div className="flex">
                            <Image src={placeholder} width={250} height={250} alt="Trainer" className="w-[10em] h-[10em] object-cover border rounded-xl"/>  
                            <p className="text-[28px] pt-[0.5em] pl-[0.5em]">Name</p>
                         </div>
                    </div>
                </article>
        </section>
    )
}