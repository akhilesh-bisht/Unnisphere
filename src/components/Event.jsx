import React from "react";
import vetor from "../assets/edu-Vulte/Vector 3.svg";
import event from "../assets/image 3.png";
import star from "../assets/edu-Vulte/star.png";

function Event() {
  return (
    <div className="relative flex flex-col gap-12 mt-[3000px]">
      {/* Background Vector Image */}
      <div className="absolute w-[1025.55px] h-[884.93px]">
        <img className="absolute right-28" src={vetor} alt="Background" />
      </div>

      {/* Heading */}
      <h1 className="text-[33px] font-semibold mb-4 relative top-24 ml-4 z-10">
        Events
      </h1>

      {/* Event Section */}
      <div className="relative flex items-center space-x-4 z-10 top-20">
        {/* Image Section */}
        <div>
          <img
            className="w-[151px] h-[120px] rounded-t-[40px] object-cover"
            src={event}
            alt="Event"
          />
        </div>

        {/* Text Section */}
        <div className="w-[595px] p-4 h-28 rounded-[16px] border-[1px] border-black flex flex-col ml-10 bg-transparent shadow-md">
          {/* University, Date, and Star Ratings in One Row */}
          <div className="flex items-center ml-2">
            <h1 className="text-2xl font-medium w-[217px]">
              University of Delhi
            </h1>
            <h2 className="text-[20px] font-medium text-gray-500 w-[132px] h-[29px]">
              23-Jan-2024
            </h2>
            <div className="flex space-x-1 ml-5">
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 w-[573px] h-6 absolute top-14 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/*   2nd Event Section  */}
      <div className="relative flex items-center space-x-4 z-10 top-20 flex-row-reverse">
        {/* Image Section */}
        <div>
          <img
            className="w-[151px] h-[120px] rounded-t-[40px] object-cover ml-3"
            src={event}
            alt="Event"
          />
        </div>

        {/* Text Section */}
        <div className="w-[595px] p-4 h-28 rounded-[16px] border-[1px] border-black flex flex-col mr-10 bg-transparent shadow-md">
          {/* University, Date, and Star Ratings in One Row */}
          <div className="flex items-center ml-2">
            <h1 className="text-2xl font-medium w-[217px]">Anna University</h1>
            <h2 className="text-[20px] font-medium text-gray-500 w-[132px] h-[29px]">
              24-Jan-2024
            </h2>
            <div className="flex space-x-1 ml-5">
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 w-[573px] h-6 absolute top-14 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/*   3rd event section */}

      <div className="relative flex items-center space-x-4 z-10 top-20">
        {/* Image Section */}
        <div>
          <img
            className="w-[151px] h-[120px] rounded-t-[40px] object-cover"
            src={event}
            alt="Event"
          />
        </div>

        {/* Text Section */}
        <div className="w-[595px] p-4 h-28 rounded-[16px] border-[1px] border-black flex flex-col ml-10 bg-transparent shadow-md">
          <div className="flex items-center ml-2">
            <h1 className="text-2xl font-medium w-[217px]">
              BHU (Banaras H...)
            </h1>
            <h2 className="text-[20px] font-medium text-gray-500 w-[132px] h-[29px]">
              23-Jan-2024
            </h2>
            <div className="flex space-x-1 ml-5">
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 w-[573px] h-6 absolute top-14 ml-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
        </div>
      </div>

      {/*  4th event */}
      <div className="relative flex items-center space-x-4 z-10 top-20 flex-row-reverse">
        {/* Image Section */}
        <div>
          <img
            className="w-[151px] h-[120px] rounded-t-[40px] object-cover ml-3"
            src={event}
            alt="Event"
          />
        </div>

        {/* Text Section */}
        <div className="w-[595px] p-4 h-28 rounded-[16px] border-[1px] border-black flex flex-col mr-10 bg-transparent shadow-md">
          {/* University, Date, and Star Ratings in One Row */}
          <div className="flex items-center ml-2">
            <h1 className="text-2xl font-medium w-[217px]">IISc Bengluru</h1>
            <h2 className="text-[20px] font-medium text-gray-500 w-[132px] h-[29px]">
              24-Jan-2024
            </h2>
            <div className="flex space-x-1 ml-5">
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
              <img className="w-7 h-7" src={star} alt="star" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 w-[573px] h-6 absolute top-14 ml-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Event;
