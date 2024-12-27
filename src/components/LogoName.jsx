import React from "react";
import unnisphere from "../assets/unnisphere.png";
function LogoName() {
  return (
    <div className=" w-64 h-9  md:w-[48rem] md:h-16  lg:w-[1102px] lg:h-36 text-center opacity-[0.94px] flex flex-col items-center justify-center">
      <img src={unnisphere} alt="Unnisphere" />
      <div className=" w-44 h-3  md:w-[592px] md:h-[23px]  font-semibold flex md:gap-4 gap-2 md:mt-6 mt-2">
        <div className=" text-[#474646] text-[10px] md:text-4xl">“Connect”</div>
        <div className=" text-[#474646] text-[10px] md:text-4xl">
          “Collaborate”
        </div>
        <div className=" text-[#474646] text-[10px] md:text-4xl">“Success”</div>
      </div>
    </div>
  );
}

export default LogoName;
