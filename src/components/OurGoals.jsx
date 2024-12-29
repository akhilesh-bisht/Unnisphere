import React from "react";

function OurGoals() {
  return (
    <>
      <div className="absolute top-[2250px] sm:top-[3225px] md:top-[4365px] lg:top-[4900px] ">
        <div className=" flex justify-center">
          <h1 className="font-bold text-center w-[70px] h-3 sm:w-28 sm:h-5 text-[15px] sm:text-xl md:text-[22px] ">
            {" "}
            Our Goal
          </h1>
        </div>

        <h1 className="w-[333px] h-16 text-[10px] mt-6 leading-4 lg:leading-normal sm:text-base sm:w-[32rem] md:text-[22px] md:w-[714px] md:h-28">
          Uniisphere’s mission is to empower university students by fostering
          meaningful connections, enhancing academic collaboration, and
          providing resources for personal and professional growth—ensuring
          opportunities for all, regardless of where they graduated from.
        </h1>
      </div>
    </>
  );
}

export default OurGoals;
