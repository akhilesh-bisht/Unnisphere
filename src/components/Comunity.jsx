import React from "react";
import part from "../assets/edu-Vulte/Vector1.svg";
import eBook from "../assets/edu-Vulte/EBook.svg";
import vetor from "../assets/edu-Vulte/Vector 2.svg";
import boys from "../assets/edu-Vulte/boys.svg";
import star from "../assets/edu-Vulte/star.png";

function Comunity() {
  return (
    <div className="absolute top-[2150px] space-y-16">
      {/* Original Container */}
      <div className="flex justify-evenly">
        {/* Left Section */}
        <div className="relative">
          <img className="w-[482px] h-80 object-contain" src={part} alt="ui" />
          <img
            className="w-80 h-72 absolute z-10 top-5 left-12 object-contain"
            src={eBook}
            alt=""
          />
          <div className="w-[446px] h-[36px]">
            <h1 className="text-3xl font-bold text-black mt-2">
              Your Path to Smarter Learning
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col mt-14 gap-4">
          <div className="w-[235px] h-[27px]">
            <h1 className="text-2xl font-semibold">EDU-VAULT</h1>
          </div>
          <div className="w-[573px] h-[119px]">
            <p
              className="text-[25px] font-light text-start text-black"
              style={{ lineHeight: "30.25px" }}
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
        <div className="flex flex-col mt-14 gap-4 order-2 md:order-1">
          <div className="w-[235px] h-[27px]">
            <h1 className="text-2xl font-semibold">Human Library</h1>
          </div>
          <div className="w-[593px] h-[119px]">
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
        </div>

        {/* Left Section (Mirrored to Right) */}
        <div className="relative order-1 md:order-2">
          <img className="w-[482px] h-80 object-contain" src={vetor} alt="ui" />
          <img
            className="w-80 h-72 absolute z-10 top-5 left-12 object-contain"
            src={boys}
            alt=""
          />
          <div className="w-[486px] h-[36px] relative">
            <h1 className="text-3xl font-bold text-black mt-2">
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
