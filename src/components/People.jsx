import React from "react";
import shereya from "../assets/people.png";

function People() {
  return (
    <>
      <div className=" border-2 border-black mt-10">
        <h1>people</h1>
        {/* top-[1109px] */}
        <div className="w-80 h-44 absolute  mt-36 bg-pink-100 rounded-2xl border-1 border-[ rgba(118, 118, 118, 1)]">
          <div className="w-28 h-5">
            <h1 className="text-xl font-semibold ml-4 ">“Shreya”</h1>
          </div>
          <div className="w-20 h-20 flex ml-4 ">
            {" "}
            <img className="rounded-[50%] mt-2" src={shereya} alt="people" />
            <div className="w-44 h-20  flex flex-col ml-5 mt-3">
              <h1 className="text-xl font-semibold text-[#757575]">B.Tech</h1>
              <p className="font-light text-sm w-44 mt-1">
                owned subsidiary of Endeavor Group Holdings.World Wrestling
                Entertainment is an American professional wrestling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default People;
