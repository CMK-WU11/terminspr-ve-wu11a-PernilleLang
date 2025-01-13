import Image from "next/image";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import Navigation from "@/components/navigation";

export default async function Home () {

    
    const responseClasses = await fetch(
        "http://localhost:4000/api/v1/classes",
    )

    const classes = await responseClasses.json();
    
    console.log(classes);

    return (
        <section className="ml-[2em] mr-[2em]">
                <h2 className="text-3xl flex justify-center m-[1em]">Popular Classes</h2>
                <div className="flex justify-between mb-[2em]">
                    <Link href="/">
                        <BiSolidLeftArrow className="fill-slate-200" size="30px"/>
                    </Link>
                    <HiMenuAlt3 className="fill-slate-200" size="30px"/>
                    <Navigation/>
                </div>
                <div key={classes.id} className="flex justify-center">
                    <Image src={classes[3].asset.url} width={300} height={300} alt="headphoto" className="relative h-[40em] w-[30em] object-cover border rounded-3xl"/>
                    <p className="text-white text-[50px] pl-[1em] absolute bottom-36">{classes[3].className}</p>
                </div>
                <div className="mb-[3em]">
                    <p className="text-4xl mt-[0.5em]">Classes for you</p>
                    <article className="flex p-[1em] scrollbar overflow-x-scroll w-[50em]">
                    {/* map funktion er kopieret fra "din mægler" opgave */}
                    {classes.map((classesForYou) => (
                        <div key={classesForYou.id} className="flex flex-col justify-center items-center mt-[3em]]">
                            <Link href={`/classdetails/${classesForYou.id}`}>
                                <Image src={classesForYou.asset.url} width={250} height={250} alt="classesforyou" className="h-[10em] w-[10em] object-cover border rounded-xl"/>
                            </Link>
                            <h3 className="pt-[1em] text-xl">{classesForYou.className}</h3>
                        </div>
                    ))}
                    </article>
                </div> 
        </section>
    )
}