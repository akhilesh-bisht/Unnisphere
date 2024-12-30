import React from "react";
import { useNavigate } from "react-router-dom";

function Button({
  btn,
  bg = "bg-black", // Default background
  hoverBg = "hover:bg-opacity-80", // Default hover background behavior
  textColor = "text-white", // Default text color
  textSize = "text-base", // Default text size
  transition = "transition-all duration-200 ease-in-out",
  fn,
  fn2, // Smooth transition
}) {
  return (
    <div
      className={` rounded-md text-center ${bg} ${hoverBg} ${textColor} border-[0.73px] border-[#767676] flex items-center justify-center ${transition}`}
    >
      <button
        onClick={fn}
        className={`font-normal text-[8px] ${textSize} w-14 h-4 md:w-24 md:h-7 `}
      >
        {btn}
      </button>
    </div>
  );
}

export default Button;
