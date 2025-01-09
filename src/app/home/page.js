import Image from "next/image";
import Link from "next/link";
import { BiSolidLeftArrow } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";

export default async function Home () {

    const response = await fetch(
        "http://localhost:4000/api/v1/assets",
    )

    const photo = await response.json();
    
    console.log(photo);

    const responseClasses = await fetch(
        "http://localhost:4000/api/v1/classes",
    )

    const classes = await responseClasses.json();
    
    console.log(classes);

    return (
        <section className="ml-[3em] mr-[3em]">
                <h2 className="text-3xl flex justify-center m-[1em]">Popular Classes</h2>
                <div className="flex justify-between mb-[2em]">
                    <Link href="/">
                        <BiSolidLeftArrow className="fill-slate-200" size="30px"/>
                    </Link>
                    <HiMenuAlt3 className="fill-slate-200" size="30px"/>
                </div>
                <div key={photo.id} className="flex justify-center">
                    <Image src={photo[0].url} width={250} height={250} alt="headphoto" className="h-[40em] w-[30em] object-cover border rounded-3xl"/>
                    <p>{classes.classDescription}</p>
                </div>
                <div className="mb-[3em]">
                    <p className="text-4xl mt-[0.5em]">Classes for you</p>
                    <article className="flex p-[1em] scrollbar overflow-x-scroll w-[50em]">
                    {/* map funktion er kopieret fra "din mægler" opgave */}
                    {classes.map((classesForYou) => (
                        <div key={classesForYou.id} className="flex flex-col justify-center items-center mt-[3em]]">
                            <Image src={classesForYou.asset.url} width={250} height={250} alt="classesforyou" className="h-[10em] w-[10em] object-cover border rounded-xl"/>
                            <h3 className="pt-[1em] text-xl">{classesForYou.className}</h3>
                        </div>
                    ))}
                    </article>
                </div>    
        </section>
    )
}