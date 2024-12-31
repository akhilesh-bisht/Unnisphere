import React from "react";
import part from "../assets/edu-Vulte/Vector1.svg";
import eBook from "../assets/edu-Vulte/EBook.svg";
import vetor from "../assets/edu-Vulte/Vector 2.svg";
import boys from "../assets/edu-Vulte/boys.svg";
import star from "../assets/edu-Vulte/star.png";

function Comunity() {
  return (
    <div className="absolute top-[1180px] sm:top-[1550px]  md:top-[2275px] lg:top-[2150px]  ">
      {/* Original Container */}
      <div className="flex lg:w-[96%] xl:justify-evenly ">
        {/* Left Section */}
        <div className="relative top-10 left-9 sm:top-2 sm:left-[-8px] md:left-8 ">
          <img
            className=" w-40 h-28   sm:w-[320px] sm:h-[260px] md:w-[400px] md:h-64 lg:w-[482px]  lg:h-80 object-contain"
            src={part}
            alt="ui"
          />
          <img
            className="  w-[101px] h-24 top-4 left-5  sm:w-48 sm:h-60 sm:left-14 md:w-64 md:top-[10px] md:left-10 lg:h-72 lg:w-80 absolute z-10 lg:top-5 lg:left-12 object-contain"
            src={eBook}
            alt="ebook"
          />
          <div className=" w-48 h-4 sm:w-80 md:w-[446px] md:h-[36px] ml-5">
            <h1 className=" text-[13px] sm:text-xl md:text-3xl font-bold text-black  mt-5 md:mt-10">
              Your Path to Smarter Learning
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col mt-14 gap-4 relative right-[0.5rem] md:right-10 lg:left-9">
          <div
            className=" w-16 h-3 
         sm:w-32  md:w-[235px] md:h-[27px]lg
         mt-1 "
          >
            <h1 className=" text-[10px] sm:text-xl md:text-2xl font-semibold">
              EDU-VAULT
            </h1>
          </div>
          <div className=" w-[188px] h-20 sm:w-80 md:w-96 lg:w-[573px] md:h-[119px]">
            <p className=" text-[10px] sm:text-[16px] sm:leading-5 sm:mt-4  md:text-lg lg:text-[25px] font-light text-start text-black lg:pr-[68px] leading-[16px] lg:leading-8 ">
              Here we Provide E-books, study guides, and reference materials,
              past papers, handmade notes, while features like search,
              bookmarks, and offline access improve usability.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly absolute">
        {/* Mirrored Container */}
        <div className="flex lg:w-[96%] xl:justify-evenly w-[95%] mx-auto">
          {/* Right Section (Mirrored to Left) */}
          <div className="flex flex-col mt-14 gap-4 relative left-[2.25rem] md:left-10 lg:right-9">
            <div
              className=" w-28 h-3 
       sm:w-40  md:w-[235px] md:h-[27px] lg:mt-1 "
            >
              <h1 className="text-[10px] sm:text-xl md:text-2xl font-semibold">
                Human Library
              </h1>
            </div>
            <div className="w-[188px] h-20 sm:w-80 md:w-96 lg:w-[573px] md:h-[119px]">
              <p className="text-[10px] sm:text-[16px] sm:leading-5 sm:mt-4 md:text-lg lg:text-[25px] font-light text-start text-black lg:pr-[68px] leading-[16px] lg:leading-8">
                A feature that allows individuals to share their stories,
                discuss their challenges, and seek guidance from others. Using a
                matching algorithm, you will be paired with people who can offer
                support, insights, or advice, creating meaningful connections
                with those they may not know..
              </p>
            </div>
          </div>

          {/* Left Section (Mirrored to Right) */}
          <div className="relative top-10 left-10 sm:top-2 sm:left-[px] md:left-8 sm:w-[45%] md:w-[44%] lg:left-0 ">
            <img
              className="w-40 h-28 sm:w-[288px] sm:h-[260px] md:w-[400px] md:h-64 lg:w-[482px] lg:h-80 object-contain"
              src={vetor}
              alt="ui"
            />
            <img
              className="w-[101px] h-24 top-4 right-16 sm:w-48 sm:h-60 sm:right-20 md:w-64 md:top-[10px] md:right-20 lg:h-72 lg:w-80 absolute z-10 lg:top-5 lg:right-20 object-contain"
              src={boys}
              alt="ebook"
            />
            <div className="w-40 h-4 sm:w-80 md:w-[478px] md:h-[36px] mr-6 relative sm:right-8">
              <h1 className="text-[10px] sm:text-xl md:text-3xl font-bold text-black mt-1 ml-3 sm:ml-0 md:mt-10">
                <img
                  className=" hidden absolute lg:top-[410px] lg:left-[276px] "
                  src={star}
                  alt=""
                />
                A Community That Cares About What You Feels and Who You Are
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunity;
