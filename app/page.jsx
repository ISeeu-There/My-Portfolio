import { Button } from "@/components/ui/button";
import{FiDownload} from "react-icons/fi";
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import State from "@/components/ui/State";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl" >Wep Developer <span> & </span> multimedia </span>
            <h1 className="h1 mb-6 ">Hello I'm <br/><span className="text-cyan-500">Atout Mouloud Assem</span></h1>
            <p className="max-w-[500px] mb-9 text-[16px] text-white xl:text-[20px]">I am a Multimedia and Web Developer skilled in creating dynamic ,user-fiendly digital experiences through desing,coding,and interactive content.
              I specialzie in building responsive websites and application that blend creativity with technology for optimal user engagement
            </p>
            {/* button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-6"> 
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-cyan-500 text-base rounded-full flex justify-center items-center text-cyan-500 text-base  hover:bg-cyan-500 hover:text-stone-950 hover:transition-all duration-500 "/>
              </div>
            </div>
          </div>
          {/* photos */}
        <div>
            <Photo/>
        </div>
          </div> 
          </div>

          <State/>
    </section>
  );
}
