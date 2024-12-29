import React from "react";
import vetor from "../assets/edu-Vulte/Vector 3.svg";
import event from "../assets/image 3.png";
import star from "../assets/edu-Vulte/star.png";

// Reusable Event Component
const EventCard = ({ university, date, description, reversed }) => {
  return (
    <div
      className={`relative flex items-center space-x-4 z-10 top-20 ${
        reversed ? "flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div>
        <img
          className=" w-[44px] h-9 sm:w-16 sm:h-12 md:w-24 md:h-16
      lg:w-[151px] lg:h-[120px] lg:rounded-t-[40px] object-cover"
          src={event}
          alt="Event"
        />
      </div>

      {/* Text Section */}
      <div
        className=" w-52 h-8 sm:w-72 sm:h-11 md:w-96 md:h-20 lg:w-[595px] pt-1 lg:p-4 lg:h-28 rounded-[8px] border-[1px] border-black flex flex-col ml-10 bg-transparent shadow-md"
        style={{
          marginLeft: reversed ? "0" : "10px",
          marginRight: reversed ? "10px" : "0",
        }}
      >
        {/* University, Date, and Star Ratings */}
        <div className="flex  ml-3">
          <h1 className=" text-[8px] sm:text-[11px] md:text-base lg:text-2xl font-medium w-20 sm:w-24 md:w-36 h-2 lg:w-[217px]">
            {university}
          </h1>
          <h2 className=" text-[7px] sm:text-[10px] md:text-sm lg:text-[20px] w-12 sm:w-16 md:w-24 md:mt-1  sm:ml-1 h-2 font-medium text-gray-500 lg:w-[132px] lg:h-[29px]">
            {date}
          </h2>
          <div className="flex space-x-1lg:ml-5 w-12 sm:w-16 md:w-32">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                className=" w-3 sm:w-3   lg:w-7 lg:h-7"
                src={star}
                alt="star"
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className=" text-[8px] sm:text-[10px] md:text-sm lg:text-sm w-36 h-2 md:w-64 md:mt-4 text-gray-700 lg:w-[573px] lg:h-6 absolute top-4 sm:top-5 mt-1 lg:top-14 ml-2 lg:ml-10">
          {description}
        </p>
      </div>
    </div>
  );
};

function Event() {
  const eventData = [
    {
      university: "University of Delhi",
      date: "23-Jan-2024",
      description: "Lorem ipsum dolor sit amet elit.",
      reversed: false,
    },
    {
      university: "Anna University",
      date: "24-Jan-2024",
      description: "Lorem ipsum dolor  elit.",
      reversed: true,
    },
    {
      university: "BHU (Banaras H....)",
      date: "23-Jan-2024",
      description: "Lorem ipsum  adipisicing.",
      reversed: false,
    },
    {
      university: "IISc Bengaluru",
      date: "24-Jan-2024",
      description: "Lorem ipsum dolor si elit.",
      reversed: true,
    },
  ];

  return (
    <div className="relative flex flex-col gap-6 top-[1380px] sm:top-[2050px] md:top-[2825px] lg:top-[3000px]">
      {/* Background Vector */}
      <div className="absolute  left-[-8px]  sm:left-0 w-[327px]  h-80 sm:w-[450px] sm:h-[480px] md:w-[625px] md:h-[600px]  lg:w-[1025.55px] lg:h-[884.93px]">
        <img
          className="absolute right-6 sm:top-24 sm:right-8 top-28 lg:top-0
         lg:right-28"
          src={vetor}
          alt="Background"
        />
      </div>

      {/* Heading */}
      <h1 className=" text-sm sm:text-lg md:text-2xl lg:text-[33px] top-28 md:top-28 font-semibold mb-4 relative lg:top-24  z-10">
        Events
      </h1>

      {/* Event Cards */}
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          university={event.university}
          date={event.date}
          description={event.description}
          reversed={event.reversed}
        />
      ))}
    </div>
  );
}

export default Event;
