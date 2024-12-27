import React from "react";

function Button({
  btn,
  bg = "bg-black", // Default background
  hoverBg = "hover:bg-opacity-80", // Default hover background behavior
  textColor = "text-white", // Default text color
  textSize = "text-base", // Default text size
  transition = "transition-all duration-200 ease-in-out", // Smooth transition
}) {
  return (
    <div
      className={` w-14 h-4 md:w-24 md:h-7 rounded-md text-center ${bg} ${hoverBg} ${textColor} border-[0.73px] border-[#767676] flex items-center justify-center ${transition}`}
    >
      <button className={`font-normal text-[8px] ${textSize}`}>{btn}</button>
    </div>
  );
}

export default Button;
