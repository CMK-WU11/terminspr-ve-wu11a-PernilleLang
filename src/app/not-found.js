import Image from "next/image"
import oops from "../../public/logo.jpg"
import Link from "next/link";

export default function error () {

    return (
        <section className="w-[100%] h-[100%]">
            <div className="flex flex-col justify-center items-center text-xs mt-[10em]">
                <Image src={oops} alt="oops" height={250} width={250} className="h-[15em] w-[20em] object-fit"/>
                <p className="font-bold pt-[1.5em]">You have landed on a page that doesn't excist!</p>
                <p className="pt-[1em]">A mistake has happend. <br /> Try to search for something else!
                </p>
                <Link href="/" className="bg-white mt-[1em] w-[25%] h-[25€] border rounded-md flex justify-center font-bold">
                    <button>Back to home</button>
                </Link> 
            </div>
        </section>
    )
}