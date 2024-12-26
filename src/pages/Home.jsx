import React from "react";
import Navbar from "../components/Navbar";
import LogoName from "../components/LogoName";
import Button from "../components/Button";
import People from "../components/People";
function Home() {
  return (
    <>
      <div className="flex  flex-col ">
        <Navbar />
      </div>
      <div className=" top-72 relative flex flex-col items-center justify-center">
        <LogoName />
        <div className="flex justify-center gap-4 mt-24">
          <Button btn={"Connect"} />
          <Button btn={"Collaborate"} />
        </div>
        <div className="w-36 h-7 relative top-42  mt-20">
          <h1 className="text-2xl font-semibold ">About Us ?</h1>
        </div>
        <div className="w-[1027px] h-36 relative top-10">
          <p className="text-2xl font-light">
            Uniisphere is a student networking app designed to connect
            university students for academic collaboration, social networking,
            and career development. It offers features like secure messaging,
            event discovery, study groups, mentorship, freelancing
            opportunities, and psychological support to create a comprehensive
            platform for student engagement and growth.
          </p>
        </div>

        <People></People>
      </div>
    </>
  );
}

export default Home;
