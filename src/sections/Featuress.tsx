
import React from "react";
import Feat from "@/assets/RectangleFet.png";
import Feat1 from "@/assets/Feat.png";
import Feat2 from "@/assets/Feato.png";
import Featcirc from "@/assets/Featc.png";
import Star from "@/assets/Feats.png";
import FeatD from "@/assets/Featd.png";

const Featuress = () => {
  return (
    <section className="mt-20 relative">
      <div className="relative flex justify-start max-w-[1300px] h-[640px] mx-auto ">
        <div className="relative min-h-[699px] max-w-[1000px] flex justify-between items-start border border-black/15 py-20 px-6 rounded-xl overflow-hidden bg-[#FBFBF8]">
          <div className="flex-1 pl-14 z-10">
            <h2 className="text-2xl md:text-6xl tracking-tighter text-left text-black font-semibold">
              Trust and safety features for your protection
            </h2>

            <div className="flex items-center mt-14">
              <div className="relative h-[20px] w-[20px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-16px]">
                <img
                  src={Featcirc.src}
                  alt="Circular Background"
                  className="h-full w-full object-cover"
                />
          
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Star.src}
                    alt="Star"
                    className="h-[10px] w-[10px] object-contain"
                  />
                </div>
              </div>

             
              <div className="ml-4 flex flex-col justify-center">
                <p className="h-[30px] w-[180px] text-lg md:text-xl text-black font-medium">
                  Secure payments
                </p>
                <p className=" h-[25px] w-[430px] text-sm md:text-base text-black mt-1">
                  Only release payment when the task is completed to your
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="flex items-center mt-14">
              <div className="relative h-[20px] w-[20px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-16px]">
                <img
                  src={Featcirc.src}
                  alt="Circular Background"
                  className="h-full w-full object-cover"
                />
          
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={FeatD.src}
                    alt="Star"
                    className="h-[10px] w-[10px] object-contain"
                  />
                </div>
              </div>

              
              <div className="ml-4 flex flex-col justify-center">
                <p className="h-[30px] w-[280px] text-lg md:text-xl text-black font-medium">
                  Trusted ratings and reviews
                </p>
                
                <p className=" h-[25px] w-[380px] text-sm md:text-base text-black mt-1">
                  Pick the right person for the task based on real ratings and reviews from other users
                </p>
              </div>
            </div>

            <div className="flex items-center mt-14">
              <div className="relative h-[20px] w-[20px] rounded-full overflow-hidden flex-shrink-0 absolute top-[-16px]">
                <img
                  src={Featcirc.src}
                  alt="Circular Background"
                  className="h-full w-full object-cover"
                />
               
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={FeatD.src}
                    alt="Star"
                    className="h-[10px] w-[10px] object-contain"
                  />
                </div>
              </div>

              
              <div className="ml-4 flex flex-col justify-center">
                <p className="h-[30px] w-[280px] text-lg md:text-xl text-black font-medium">
                  Insurance for peace of mind
                </p>
               
                <p className=" h-[25px] w-[430px] text-sm md:text-base text-black mt-1">
                  We provide liability insurance for Taskers performing most task activities
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-10 w-[343px] h-full">
            <img
              src={Feat.src}
              alt="Task Image"
              className="object-contain w-full h-full ml-7"
            />
          </div>
        </div>

       
        <div className="absolute top-0 right-0 h-[699px] w-[400px] rounded-lg overflow-hidden">
          <img
            src={Feat1.src}
            alt="Feat Image"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-20 left-10 h-[76px] w-[180px] z-10 px-5 py-2 rounded-lg">
            <img
              src={Feat2.src}
              alt="Feato Image"
              className="object-cover h-full w-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto mb-10 mt-32 relative"
        style={{
          width: "1300px",
          height: "699px",
          gap: "0px",
          opacity: "1", 
        }}
      >
       
        <div className="relative w-full h-full flex items-center justify-center border border-black/15 rounded-xl bg-white">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bCJ3A-PZf5k
"
            title="YouTube video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Featuress;
