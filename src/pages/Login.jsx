import React from "react";
import logo from "../assets/SmallLogo.svg";
import LoginNav from "../components/LoginNavbar";
import sidebar from "../assets/sidebar.png";
import { FaGoogle } from "react-icons/fa";
function Login() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <img
          className="w-11 h-[39.5px] md:w-24 md:h-20 lg:w-[117px] lg:h-[106px]"
          src={logo}
          alt=""
        />
        <img src={sidebar} className="w-[34px] h-[23px] lg:hidden" alt="" />
      </div>
      <div className="mt-16 flex justify-center items-center">
        <LoginNav />
      </div>
      <div className="flex w-full p-5 justify-center  ">
        <div className="w-[286px] h-[361px] mt-6 bg-[#f7f7fd] md:w-[480px] md:h-[500px]  xl:w-[687px] xl:h-[614px] p-4 rounded-lg shadow-lg">
          <form className="space-y-2 mt-4">
            {/* New Label Input */}
            <div className="flex flex-col md:mt-5   ">
              <label
                htmlFor="email"
                className=" text-xs xl:text-xl mb-1 ml-4 lg:ml-10"
              >
                Email or Phone Number
              </label>
              <input
                type="email"
                id="email"
                className="w-[254px] h-[27px] md:w-[435px] md:h-[35px] xl:w-[575px] xl:h-[45px] px-4 border-[1.5px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs mx-auto"
              />
            </div>

            {/* Password Input with Remember Me */}
            <div className="flex flex-col  ">
              <label
                htmlFor="password"
                className="text-xs xl:text-xl mb-1 ml-4 lg:ml-10"
              >
                Password (6+charater)
              </label>
              <input
                type="password"
                id="password"
                className="w-[254px] h-[27px] px-4 border-[1.5px] md:w-[435px] md:h-[35px] xl:w-[575px] xl:h-[45px] border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs mx-auto"
              />
            </div>

            <div className="flex items-center justify-end">
              <input type="checkbox" id="remember" className="mr-1 " />
              <label
                htmlFor="remember"
                className="text-[9px]  md:text-sm xl:text-base"
              >
                Remember me
              </label>
            </div>
            {/* Agreement Text */}
            <div className="text-[8px] md:text-sm xl:text-xl text-center w-[266px] h-[33px] md:w-[400px] mx-auto  md:h-[58px] xl:w-[507px] xl:h-[96px] leading-tight  ">
              By clicking <strong>Agree & join</strong> or{" "}
              <strong>Continue</strong>, you agree to the Uniisphere{" "}
              <strong>User Agreement</strong>, <strong>Privacy Policy</strong>{" "}
              and <strong>Cookie Policy</strong>.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[78px] h-[21px] md:w-20 md:h-5 md:text-sm xl:w-36 xl:h-9  xl:text-xl bg-[#0066FF] text-white text-[9px] rounded-md mx-auto block hover:bg-[#0056cc] "
            >
              Login
            </button>

            {/* Or with Google */}
            <div className="flex items-center w-full mt-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500 text-[10px] md:text-base xl:text-[22px]">
                or with
              </span>
              <div className="flex-grow border-[1px] border-gray-300"></div>
            </div>
            <button
              type="button"
              className="w-[70px] h-[17px] md:w-20 md:h-5 xl:w-[125px] xl:h-[35px] flex items-center justify-center mt-3 bg-white border border-black rounded-md shadow-sm hover:bg-gray-100 mx-auto "
            >
              <FaGoogle className="w-3 h-3 mr-2 text-[#4285F4] " />
              <span className="text-[10px] md:text-sm xl:text-xl">Google</span>
            </button>

            {/* Create Account Link */}
            <div className="text-center  h-3 flex justify-center w-full pt-8 ">
              <a
                href="#"
                className="text-[10px]  md:text-sm xl:text-xl hover:underline"
              >
                Create an account on Uniisphere
                <span className="  text-blue-500"> Sign up</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
