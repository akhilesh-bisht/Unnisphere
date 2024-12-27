import React from "react";
import logo from "../assets/logo.svg";
const Logo = () => {
  return (
    <img
      className=" w-11 h-10 absolute md:w-[117px] md:h-[106px] top-[21px] left-[28px] "
      title="Logo"
      src={logo}
    />
  );
};

export default Logo;
