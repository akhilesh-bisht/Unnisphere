import React from "react";

function Button({ btn, bg }) {
  return (
    <div className="w-28 h-7 top-[602px] left-[588px]  bg-black rounded-md text-white text-center px-">
      <button className="text-lg font-normal w-20 h-3">{btn}</button>
    </div>
  );
}

export default Button;
