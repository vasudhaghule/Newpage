'use client';
import Image from "next/image";
import ArrowIcon from "@/assets/PathhR.png"; 
import Imgg from "@/assets/imgg.png";
import Pathh from "@/assets/Path.png";

export const Hero = () => {
  return (
    <section>
      <div className="relative text-center mt-20">
        <h2 className="text-10xl md:text-8xl text-black font-medium w-full max-w-screen-lg mx-auto opacity-95">
          Get More Done
        </h2>

        
        <p className="text-black md:text-xl mt-6 text-center max-w-xl mx-auto gap-6">
          Post Any Task. Pick The Best Person. Get It Done.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 flex  items-center justify-between text-gray-500 font-medium rounded-full gap-6 border-4 border-black">
            <span className="text-left text-gray-500">Post a Task with AI for free</span>
            <Image src={ArrowIcon} alt="Arrow Icon" width={20} height={20} className="ml-4"/>
          </button>
        </div>
        <div className="mt-4 flex justify-center">
        <Image src={Imgg} alt="Arrow Icon" width={930} height={496} className="ml-4"/>
        </div>

        <div className="mt-4 ml-8 flex justify-center">
          <button className="px-6 py-3 flex  items-center justify-between  bg-black font-medium rounded-full gap-6 border border-black">
            <span className="text-left text-white">Earn money as a Tasker</span>
            <Image src={Pathh} alt="Arrow Icon" width={20} height={20} className="ml-4"/>
          </button>
        </div>
      </div>
    </section>
  );
};
