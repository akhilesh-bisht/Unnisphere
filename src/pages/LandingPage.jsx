import React from "react";
import Navbar from "../components/Navbar";
import LogoName from "../components/LogoName";
import Button from "../components/Button";
import People from "../components/People";
import elipse from "../assets/Ellipse.png";
import elipse2 from "../assets/Ellipse2.png";
import elipse3 from "../assets/Ellipse3.svg";
import Video from "../components/VideoComp";
import Comunity from "../components/Comunity";
import Event from "../components/Event";
import Comunity2 from "../components/Comminity2";
import OurGoals from "../components/OurGoals";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col p-2 ">
        <Navbar />
      </div>

      {/* Left side column */}
      <div className="fixed top-[333px] left-[-67px] flex flex-col items-center space-y-4">
        <div className="w-28">
          <img src={elipse} alt="Elipse" />
        </div>
        <div className="w-44 text-[#E1C86B4D]">
          <img src={elipse2} alt="Elipse 2" />
        </div>
        <div className="w-28 text-[#44A9B14D]">
          <img src={elipse3} alt="Elipse 3" />
        </div>
      </div>

      {/* Center content */}

      <div className="flex items-center justify-center ">
        <div className="absolute top-40  md:top-[260px] flex flex-col items-center justify-center">
          <LogoName />
          <div className="flex justify-center gap-1 md:gap-4  absolute top-16 md:top-[196px] lg:top-[215px]">
            <Button
              btn="Connect"
              bg="bg-[#E3E3E3]"
              hoverBg="hover:bg-gray-400"
              textColor="text-black"
              textSize="md:text-base"
            />
            <Button
              btn="Collaborate"
              bg="bg-black"
              hoverBg="hover:bg-gray-900"
              textColor="text-white"
              hoverTextColor="hover:text-gray-300"
              textSize="md:text-sm"
            />
          </div>

          <div className="w-44 fixed top-[484px] left-[-60px] text-[#E1C86B4D]">
            {" "}
            <img src={elipse2} alt="elipse" />
          </div>

          <div className="w-36 h-7 relative top-16 md:top-48 lg:md:top-36 ">
            <h1 className=" text-[10px] md:text-2xl md:font-semibold text-center ">
              About Us ?
            </h1>
          </div>

          <div className=" w-96 h-12  sm:w-[37rem] md:w-[830px]  lg:w-[1027px] md:h-36 absolute top-32 md:top-80 mt-2 ">
            <p className="text-[10px] sm:text-sm leading-[16px]  md:text-2xl font-light text-start text-wrap p-2 pl-4">
              Uniisphere is a student networking app designed to connect
              university students for academic collaboration, social networking,
              and career development. It offers features like secure messaging,
              event discovery, study groups, mentorship, freelancing
              opportunities, and psychological support to create a comprehensive
              platform for student engagement and growth.
            </p>
          </div>
        </div>

        {/* Right side column */}
        {/* <div className="fixed top-[333px] right-[-67px] flex flex-col items-center space-y-4">
          <div className="w-28">
            <img src={elipse} alt="Elipse" />
          </div>
          <div className="w-44 text-[#E1C86B4D]">
            <img src={elipse2} alt="Elipse 2" />
          </div>
          <div className="w-28 text-[#44A9B14D]">
            <img src={elipse3} alt="Elipse 3" />
          </div>
        </div> */}

        {/* Optional People component */}
        <People />
        <Video />
        <Comunity />
        <Event />
        <Comunity2 />
        <OurGoals />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
