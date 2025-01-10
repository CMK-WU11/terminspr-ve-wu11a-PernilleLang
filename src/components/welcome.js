import Link from "next/link";

export default function Welcome () {

    return (
        <section>
            <article className="relative bg-[url('/background.jpg')] bg-cover bg-center h-[50vh] w-[100vw]">
                <div className="h-[50vh] flex flex-col justify-end text-white ml-[4em] pb-[3em]">
                    <h2 className="text-[62px]">Believe <br/> Yourself</h2>
                    <h3 className="text-[28px]">Train like a pro</h3>
                </div>
            </article>
            <article className="relative bg-[url('/center.jpg')] bg-cover bg-center h-[50vh] w-[100vw]">
                <div className="h-[50vh] flex flex-col justify-end items-end pb-[4em]">
                    <Link href="/home" className="bg-white w-[70%] h-[3em] text-3xl border rounded-l-lg flex justify-center">
                        <button >Start Training</button>
                    </Link> 
                </div>
            </article>
        </section>
    )
}