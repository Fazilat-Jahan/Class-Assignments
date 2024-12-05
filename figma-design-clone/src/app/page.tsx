import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className='h-auto w-[1922] bg-[#043873]'>
      <Navbar />
      <HeroSection />
      <Footer/>

    </div>
  );
}
