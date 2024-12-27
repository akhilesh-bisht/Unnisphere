import React from "react";
import vetor from "../assets/edu-Vulte/Vector 3.svg";
import event from "../assets/image 3.png";
import star from "../assets/edu-Vulte/star.png";
function Event() {
  return (
    <div className="flex  flex-col   gap-4 absolute  top-[3000px]">
      <img className="relative w-[1025.55px] h-[884.93px]" src={vetor} alt="" />

      <h1 className="text-[33px] font-semibold absolute">Events </h1>
      <div className="absolute flex">
        <img
          className="w-[151px] h-[120px] rounded-t-[40px]"
          src={event}
          alt=""
        />
        <div className="w-[595px] h-[106px] rounded-t-[12px] border-[1px] flex ">
          <div className="w-56 ">
            <h1 className="text-2xl font-medium">University of delhi</h1>
          </div>
          <div className="w-32 h-4">
            <h1 className="text-[20px] font-medium">23-jan-2024</h1>
          </div>
          <div className="flex">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              accusamus facere suscipit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
