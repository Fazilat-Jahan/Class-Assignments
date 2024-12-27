
const userData = async (props: any) => {
    const api = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.data}`)
    const res = await api.json()
    return (


        <div className="items-center justify-center  border border-white m-2">
            <h1 className=" text-2xl p-2 m-1 font-bold text-center italic" >Data &nbsp; of &nbsp; User &nbsp; "{res.name}"</h1>

            <h1 className="border  text-2xl p-2 m-1 font-bold shadow-white  bg-gradient-to-b from-fuchsia-400 to-slate-900 text-black text-center" >
                {/* id: &nbsp; {props.params.data} <br /> */}
                {/* Name: &nbsp; {res.name} <br /> */}
                UserName: &nbsp; {res.username} <br />
                Email: &nbsp; {res.email} <br />
                Phone: &nbsp; {res.phone} <br />
                Website: &nbsp; {res.website}
            </h1>
        </div>
    )
}

export default userData;