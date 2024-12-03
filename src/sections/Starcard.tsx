import React from "react";
import Image from "next/image";
import pop from "@/assets/Popular.png";
import Rect from "@/assets/Rectangle.png";
import Gstar from "@/assets/Gstar.png";
import Rectt from "@/assets/Rectt.png";
import Recttt from "@/assets/Recttt.png";
import Pathh from "@/assets/Path.png";

const Starcard = () => {
  const contentData = [
    { title: "REMOVALS", description: "" },
    { title: "CLEANING", description: "" },
    { title: "DELIVERY", description: "" },
    { title: "ASSEMBLY", description: "" },
    { title: "PAINTING", description: "" },
    { title: "TUTORING", description: "" },
  ];

  return (
    <section className="mt-20 px-8">
      <h2 className="text-4xl md:text-7xl font-bold leading-tight text-black">
        What others are getting done
      </h2>

    
      <div className="mt-14 flex flex-wrap gap-3">
        <button className="px-5 py-2 flex items-center font-medium text-black rounded-full border-2 border-black relative">
          <Image
            src={pop}
            alt="Popular Icon"
            width={20}
            height={20}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          <span className="ml-8">Popular</span>
        </button>

        {["UX/UI Design", "Ecommerce Dev", "Video Animation", "Web Dev", "AI/ML"].map(
          (category) => (
            <button key={category} className="px-3 py-2 bg-white font-medium rounded-full text-black/70 border-2 border-black/70" >
              {category}
            </button>
          )
        )}
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contentData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 p-6 rounded-xl border border-black/15 bg-white min-h-[200px]"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-[56px] w-[56px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-16px]">
                <img src={Rect.src} alt="Circular Background" className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={Rectt.src} alt="Star" className="h-[14px] w-[18px] object-contain"/>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={Recttt.src}  alt="Star" className="h-[10px] w-[18px] object-contain" />
                </div>
              </div>
             
              <div>
                <p className="text-sm md:text-base font-medium text-black">REMOVALS </p>
                <p className="mt-1 text-lg md:text-xl font-semibold text-black">Couch moved 1km down the road </p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-auto pt-4">
              <Image src={Gstar} alt="Gstar Icon" width={16} height={16} className="object-contain"/>
              <p className="text-sm font-medium text-black">5 Stars</p>
            </div>

            <div className="absolute bottom-4 right-4 text-lg  text-black">$500 </div>
          </div>
        ))}
      </div>

      <div className="mt-8 ml-8 flex justify-center">
          <button className="px-6 py-3 flex  items-center justify-between  bg-black font-medium rounded-full gap-6 border border-black">
            <span className="text-left text-white">Post your task</span>
            <Image src={Pathh} alt="Arrow Icon" width={20} height={20} className="ml-4"/>
          </button>
        </div>
    </section>
  );
};

export default Starcard;
