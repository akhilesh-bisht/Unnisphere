import React from "react";
import logo from "../assets/SmallLogo.svg";
import LoginNav from "../components/LoginNavbar";
import sidebar from "../assets/sidebar.png";

function Signup() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img
          className="w-11 h-[39.5px] md:w-24 md:h-20 lg:w-[117px] lg:h-[106px]"
          src={logo}
          alt="Logo"
        />
        <img src={sidebar} className="w-[34px] h-[23px] lg:hidden" alt="Menu" />
      </div>
      <div className="mt-16 flex justify-center items-center">
        <LoginNav />
      </div>
      <div className="flex w-full p-5 justify-center">
        <div className="w-[286px] h-auto mt-6 bg-[#f7f7fd] md:w-[480px] md:h-auto xl:w-[687px] p-4 rounded-lg shadow-lg">
          <form className="space-y-4 mt-4">
            {/* Full Name Input */}
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="text-xs xl:text-xl mb-1 ml-4 lg:ml-10"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="w-[254px] h-[27px] md:w-[435px] md:h-[35px] xl:w-[575px] xl:h-[45px] px-4 border-[1.5px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs mx-auto"
              />
            </div>

            {/* Last Name Input */}
            <div className="flex flex-col">
              <label
                htmlFor="lastname"
                className="text-xs xl:text-xl mb-1 ml-4 lg:ml-10"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="w-[254px] h-[27px] md:w-[435px] md:h-[35px] xl:w-[575px] xl:h-[45px] px-4 border-[1.5px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs mx-auto"
              />
            </div>

            {/* Location Input */}
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="text-xs xl:text-xl mb-1 ml-4 lg:ml-10"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-[254px] h-[27px] md:w-[435px] md:h-[35px] xl:w-[575px] xl:h-[45px] px-4 border-[1.5px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs mx-auto"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs xl:text-xl mb-1 ml-4 lg:ml-10"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-[254px] h-[27px] md:w-[435px] md:h-[35px] xl:w-[575px] xl:h-[45px] px-4 border-[1.5px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs mx-auto"
              />
            </div>

            {/* Password Input */}

            {/* Age Confirmation */}
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="age-confirm"
                className="w-4 h-4 mr-2"
              />
              <label
                htmlFor="age-confirm"
                className="text-[8px] md:text-sm xl:text-xl"
              >
                I am above 16 years of age.
              </label>
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              className="w-[78px] h-[21px] md:w-20 md:h-5 xl:w-36 xl:h-9 xl:text-xl bg-[#0066FF] text-white text-[9px] rounded-md mx-auto block hover:bg-[#0056cc]"
            >
              Continue
            </button>

            {/* Or with Google */}

            {/* Login Link */}
            <div className="text-center h-3 flex justify-center w-full pt-8">
              <a
                href="/login"
                className="text-[10px] md:text-sm xl:text-xl hover:underline"
              >
                Already have an account?{" "}
                <span className="text-blue-500">Log In</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
