'use client';

import Taskimg from "@/assets/Layer.png";
import Logo from "@/assets/logo.svg";
import IconPoints from "@/components/IconPoints";
import one from "@/assets/one.png";
import two from "@/assets/Two.png";
import three from "@/assets/Three.png";
import Pathh from "@/assets/Path.png";
import Image from "next/image";
import PathArr from "@/assets/PathArr.png";

export const CallAction = () => {
  return (
    <section className="mt-20">
      <div className="w-full min-h-[140px] max-w-[1300px] mx-auto">
        <div className="relative border border-black/15 py-20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#E8FAF4] opacity-95"></div>
          
          <div className="absolute top-[52px] left-14 z-30">
            <Logo className="h-10 w-auto" alt="Logo" />
          </div>
          <div className="relative z-10 flex items-start justify-between">
            <div className="flex-1 pl-14">
              <h2 className="text-4xl md:text-7xl tracking-tighter text-left font-sm text-black mt-6 w-700 h-68 font-semibold">
                Post your first <br />task in seconds
              </h2>
              <p className="text-2xl md:text-2lg text-black/80 mt-5 tracking-tight">
                Save yourself hours and get your to-do list <br />completed in simple 3 steps.
              </p>
              <div className="space-y-6 mt-6">
                <IconPoints text="Describe what you need done" imageSrc={one.src} />
                <IconPoints text="Set your budget" imageSrc={two.src} />
                <IconPoints text="Receive quote and pick the best Tasker" imageSrc={three.src} />
              </div>
              <div className="mt-12 flex justify-start">
                <button className="px-6 py-3 flex items-center justify-between bg-black font-medium rounded-full gap-6 border border-black">
                  <span className="text-left text-white">Post your task</span>
                  <Image src={Pathh} alt="Arrow Icon" width={20} height={20} className="ml-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center">
              <div className="w-full max-w-[627px] h-auto mt-8 px-6 mt-10 mb-4">
                <img src={Taskimg.src} alt="Task Image" className="w-full h-auto object-cover" />
              </div>
              <div className="mt-14"> 
                <button className="px-6 py-3 flex items-center justify-between  font-medium rounded-full gap-6 ">
                  <span className="text-left text-black">Learn how Uplancer works</span>
                  <Image src={PathArr} alt="Arrow Icon" width={20} height={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
