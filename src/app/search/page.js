import Link from "next/link";
import Image from "next/image";
import { BiSolidLeftArrow } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

export default async function Search () {


    // søgemetoden er kopieret fra dinmægler

    // const { q } = await params

    // const searchresponse = await fetch("http://localhost:4000/api/v1/classes" + q,  {
    //     "method": "GET"
    //   })

    //     // .then(response => console.log(response))
    //     .catch(err => console.error(err));

    //     const data = await searchresponse.json()

    //     console.log(data)

    const responseClasses = await fetch(
        "http://localhost:4000/api/v1/classes",
    )

    const classes = await responseClasses.json();
    console.log(classes);

    const popularTrainers = await fetch(
        "http://localhost:4000/api/v1/trainers",
    )

    const popular = await popularTrainers.json();
    console.log(popular);

    return(
        <section>
            <div className="flex justify-between mt-[3em] ml-[1.5em] mr-[1.5em]">
                <Link href="/home">
                    <p className="flex text-[#F4A88E]"><BiSolidLeftArrow className="fill-[#F4A88E]" size="20px"/>Back</p>
                </Link>
                <HiMenuAlt3 className="fill-slate-200" size="30px"/>
            </div>
            <h2 className="text-[62px] ml-[0.5em]">Search</h2>
            <form className="flex w-[100%] relative">
                <CiSearch className="absolute left- top-1/2" />
                <input type="search" placeholder="Search classes" className="flex text-[28px] bg-[#E4E4E4] w-[13em] p-[0.5em] ml-[1.2em] mr-[1.5em] mt-[0.5em] text-slate-400 border rounded-xl border-slate-400" />
            </form>
            <div className="w-[100%]">
                <h3 className="text-[40px] ml-[0.7em] mt-[0.5em]">Popular Classes</h3>
                <article className="flex p-[1em] scrollbar overflow-x-scroll w-[50em]">
                    {/* map funktion er kopieret fra "din mægler" opgave */}
                    {classes.map((classesForYou) => (
                        <div key={classesForYou.id} className="flex flex-col justify-center items-center mt-[3em]]">
                            <Image src={classesForYou.asset.url} width={250} height={250} alt="classesforyou" className="h-[10em] w-[10em] object-cover border rounded-xl"/>
                            <h4 className="pt-[1em] text-xl">{classesForYou.className}</h4>
                        </div>
                    ))}
                </article>
            </div>
            <div>
                <h3 className="text-[40px] ml-[0.7em] mt-[0.5em]">Popular Trainers</h3>
                <article className="flex flex-col p-[1em] w-[50em] ml-[0.7em]">
                    {/* map funktion er kopieret fra "din mægler" opgave */}
                    {popular.map((yourTrainers) => (
                        <div key={yourTrainers.id} className="mt-[3em] flex">
                            <Image src={yourTrainers.asset.url} width={250} height={250} alt="populartrainers" className="h-[10em] w-[10em] object-cover border rounded-xl"/>
                            <h4 className="pt-[1em] pl-[1em] text-[28px]">{yourTrainers.trainerName}</h4>
                        </div>
                    ))}
                </article>
                {/* <div>
                    {data.map((search) => (
                       <classDetails key={search.id} search={search}></classDetails> 
                    ))}
                </div> */}
                
            </div>
        </section>
    )
}