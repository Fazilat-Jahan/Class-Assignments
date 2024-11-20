import Image from "next/image";


export default function Home() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 m-6 justify-items-center">
   
     
        <div className="place-items-center text-center gap-6 p-4 w-3/4 border border-cyan-700">
          <Image src="/cricket kit 2.jfif" alt="cricket kit " width={150} height={150} className=" shadow-2xl rounded-2xl" />
          <h1 className="font-bold m-2">Hard Ball Cricket Kit</h1>
          <h1 className="font-bold m-2">Price: 24,000/rs</h1>
          <button className="font-bold bg-teal-500 p-2 rounded-lg">Add To Cart</button>
        </div>

        <div className="place-items-center text-center gap-6 p-4 w-3/4 border border-cyan-700">
          <Image src="/cricket kit 2.jfif" alt="cricket kit " width={150} height={150} className=" shadow-2xl rounded-2xl" />
          <h1 className="font-bold m-2">Hard Ball Cricket Kit</h1>
          <h1 className="font-bold m-2">Price: 24,000/rs</h1>
          <button className="font-bold bg-teal-500 p-2 rounded-lg">Add To Cart</button>
        </div>

        <div className="place-items-center text-center gap-6  p-4 w-3/4 border border-cyan-700 ">
          <Image src="/cricket kit 2.jfif" alt="cricket kit " width={150} height={150} className=" shadow-2xl rounded-2xl" />
          <h1 className="font-bold m-2">Hard Ball Cricket Kit</h1>
          <h1 className="font-bold m-2">Price: 24,000/rs</h1>
          <button className="font-bold bg-teal-500 p-2 rounded-lg">Add To Cart</button>
        </div>


      </div>
   
  );
}
