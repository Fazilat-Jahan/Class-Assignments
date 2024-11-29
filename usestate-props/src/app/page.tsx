import ParentComponents from "./components/parentComponents";
export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <main className="bg-gradient-to-b from-rose-400 to-red-950 rounded-3xl md:rounded-full h-full w-full text-center p-4 m-4 font-serif shadow-slate-200 shadow-2xl">
        <ParentComponents />
      </main>
    </div>
  );
}
