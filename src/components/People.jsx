import React from "react";
import shereya from "../assets/people.png";

const peopleData = [
  {
    name: "“Shreya”",
    heading: "B.Tech",
    description:
      "Owned subsidiary of Endeavor Group Holdings. World Wrestling Entertainment is an American professional wrestling.",
    img: shereya,
    bgColor: "bg-pink-100",
  },
  {
    name: "“Yashi”",
    heading: "B.Tech",
    description:
      "Leading provider of management consulting. Offering top-tier strategy  organizations worldwide.",
    img: shereya,
    bgColor: "bg-yellow-100",
  },
  {
    name: "“Ruhi”",
    heading: "BSC",
    description:
      "Focused on advanced computing solutions and application development with modern tools and methodologies.",
    img: shereya,
    bgColor: "bg-blue-100",
  },
  {
    name: "“Rohit”",
    heading: "Arts",
    description:
      "Expert in engineering innovations, with a focus on cutting-edge technologies in the tech domain.",
    img: shereya,
    bgColor: "bg-green-100",
  },
  {
    name: "“Aradhana”",
    heading: "Arts",
    description:
      "Specialist in scientific research, bringing creative solutions to complex challenges in modern science.",
    img: shereya,
    bgColor: "bg-purple-100",
  },
  {
    name: "“Vansh”",
    heading: "Arts",
    description:
      "Dedicated to groundbreaking research and contributing to academia with impactful studies and findings.",
    img: shereya,
    bgColor: "bg-orange-100",
  },
];

function People() {
  return (
    <div className="absolute top-96 md:top-[900px] py-12 px-2 ">
      <h1 className="  text-start md:text-center text-2xl font-medium text-black mb-8 ml-2">
        People
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-12 px-2 mt-1 md:px-8">
        {peopleData.map((person, index) => (
          <div
            key={index}
            className={`p-2 rounded-2xl border border-gray-300 shadow-lg ${person.bgColor} transform transition duration-300 ease-in-out hover:scale-105  hover:shadow-2xl hover:opacity-90 lg:w-80 lg:h-44 `}
          >
            <h2 className=" text-[10px] sm:text-xl font-semibold">
              {person.name}
            </h2>
            <div className="flex  mb-4">
              <img
                className=" w-7 h-6 sm:w-20  md:h-20 rounded-full border-2 border-gray-300  transform transition duration-300 ease-in-out hover:scale-125 hover:rotate-12 mt-1"
                src={person.img}
                alt={person.name}
              />
              <div className="ml-4">
                <h3 className=" text-[9.5px] sm:text-[15px]  md:text-xl text-gray-500">
                  {person.heading}
                </h3>
                <p className=" text-[9px]   text-gray-700 sm:text-sm mt-2">
                  {person.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
