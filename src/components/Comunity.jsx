import React from "react";
import part from "../assets/edu-Vulte/Vector1.svg";
import eBook from "../assets/edu-Vulte/EBook.svg";
import vetor from "../assets/edu-Vulte/Vector 2.svg";
import boys from "../assets/edu-Vulte/boys.svg";
import star from "../assets/edu-Vulte/star.png";

function Comunity() {
  return (
    <div className="absolute top-[1180px] sm:top-[1550px]  md:top-[2275px] lg:top-[2150px] space-y-16">
      {/* Original Container */}
      <div className="flex lg:w-[96%] xl:justify-evenly">
        {/* Left Section */}
        <div className="relative top-10 left-5 sm:top-2 sm:left-[-8px] md:left-8 ">
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
          <div className=" w-48 h-4 sm:w-80 md:w-[446px] md:h-[36px] ml-6">
            <h1 className=" text-[13px] sm:text-xl md:text-3xl font-bold text-black  mt-1 md:mt-10">
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
            <p
              className=" text-[10px] sm:text-[16px] sm:leading-5 sm:mt-4  md:text-lg lg::text-[25px] font-light text-start text-black lg:pr-[68px] leading-[16px] "
              md:style={{ lineHeight: "30.25px" }}
            >
              Here we Provide E-books, study guides, and reference materials,
              past papers, handmade notes, while features like search,
              bookmarks, and offline access improve usability.
            </p>
          </div>
        </div>
      </div>

      {/* Mirrored Container */}
      <div className="flex justify-evenly">
        {/* Right Section (Mirrored to Left) */}
        {/* <div className="flex flex-col mt-14 gap-4 order-2 md:order-1">
          <div className="w-[235px] h-[27px] ml-20">
            <h1 className="text-2xl font-semibold ">Human Library</h1>
          </div>
          <div className=" lg:w-[560px]  xl:w-[583px] h-[119px] ml-20">
            <p
              className="text-[25px] font-light text-start text-black"
              style={{ lineHeight: "30.25px" }}
            >
              A feature that allows individuals to share their stories, discuss
              their challenges, and seek guidance from others. Using a matching
              algorithm, you will be paired with people who can offer support,
              insights, or advice, creating meaningful connections with those
              they may not know
            </p>
          </div>
        </div> */}

        {/* Left Section (Mirrored to Right) */}
        <div className="relative order-1 md:order-2">
          <img className="w-[450px] h-80 object-contain" src={vetor} alt="ui" />
          <img
            className="w-80 h-72 absolute z-10 top-5 left-12 object-contain"
            src={boys}
            alt=""
          />
          <div className="w-[486px] h-[36px] relative">
            <h1
              className="text-3xl font-bold text-black mt-2 ml-14
          "
            >
              <img
                className="absolute top-[50px] left-[274px]"
                src={star}
                alt=""
              />
              A Community That Cares About What You Feels and Who You Are
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunity;
