export default async function SearchResult ( {params}) {

    // søgemetoden er kopieret fra dinmægler

    const { q } = await params

    const response = await fetch("http://localhost:4000/api/v1/classes" + q,  {
        "method": "GET"
      })
        // .then(response => console.log(response))
        .catch(err => console.error(err));

        const data = await response.json()

        console.log(data)

return (
    <section>
        <div className="relative bg-[url('/building.png')] bg-cover bg-center h-[20vh] w-[100vw] flex flex-row items-center justify-around">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="font-extrabold text-4xl text-white z-10">classdetails</h2>
        </div>
        <div>
            <div className="mx-auto margin-style grid grid-cols-2 gap-[1em]">
                {data.map((search)=> (
                    <h3 key={search.id} class={search}>{details.className}</h3>
                ))}
            </div>
        </div>
    </section>
)
}