import React from "react";
import StarGreen from "@/assets/StarGreen.png";
import Image from "next/image";

const Category = () => {
  const categories = [
    { name: "Development & IT", rating: "4.85/5", skills: "1853 skills" },
    { name: "AI Services", rating: "4.8/5", skills: "294 skills" },
    { name: "Design & Creative", rating: "4.91/5", skills: "968 skills" },
    { name: "Sales And Marketing", rating: "4.77/5", skills: "392 skills" },
    { name: "Writing & Translation", rating: "4.75/5", skills: "1168 skills" },
    { name: "Admin & Support", rating: "4.92/5", skills: "804 skills" },
    { name: "Finance And Accounting", rating: "4.79/5", skills: "214 skills" },
    { name: "Engineering & Architec", rating: "4.85/5", skills: "650 skills" },
  ];

  return (
    <section className="mt-20 px-8">
      <h2 className="text-4xl md:text-3xl font-bold leading-tight text-black ml-12">
  Browse Talent by category
</h2>
<p className="mt-1 text-lg md:text-xl text-black/70 ml-12">
        Looking for work? <span className="text-[#108A00] underline cursor-pointer">Browse Jobs</span>
      </p>


      <div
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 mx-auto"
        style={{
          width: "1200px", 
          height: "auto",
          opacity: "1", 
        }}
      >
  
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-[276px] h-[124px] bg-[#FBFBF8] border border-[#FBFBF8] rounded-lg flex flex-col items-center justify-between p-4 relative"
          >
            <p className=" w-[188.27px] h-[20.47px] absolute bottom-20 left-4 text-black font-medium ml-1">
              {category.name}
            </p>

            <div className="flex items-center gap-1 absolute bottom-10 left-4 ">
              <Image
                src={StarGreen}
                alt="Gstar Icon"
                width={12}
                height={12}
                className="object-contain"
              />
              <p className=" text-sm font-medium text-black">{category.rating}</p>
            </div>

            <div className="absolute bottom-10 left-30 text-sm font-medium text-black">
              {category.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
