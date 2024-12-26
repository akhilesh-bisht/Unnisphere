import React from "react";
import unnisphere from "../assets/unnisphere.png";
function LogoName() {
  return (
    <div className="w-[1101px] h-36 text-center opacity-[0.94px] flex flex-col items-center justify-center">
      <img src={unnisphere} alt="Unnisphere" />
      <div className="w-[592px] h-[23px] top-[512px] left-[424px]  opacity-[0px] font-semibold flex gap-4 mt-6">
        <div className=" text-[#474646] text-4xl">“Connect”</div>
        <div className=" text-[#474646] text-4xl">“Collaborate”</div>
        <div className=" text-[#474646] text-4xl">“Success”</div>
      </div>
    </div>
  );
}

export default LogoName;
