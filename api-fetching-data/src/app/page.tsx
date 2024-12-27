import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const api = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await api.json()
  console.log(data);

  return (
    <div className="">
      <h1 className="border border-white text-2xl p-2 m-1 font-bold" >User Data</h1>
      {
        data.map((response: any, index: number) => (
          <div className="border-b border-white p-1.5  text-lg m-1" key={index}>
            <Link href={`/${response.id}`}>
              <h1>
                {response.id}: &nbsp; &nbsp; {response.username}
              </h1>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
