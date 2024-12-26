import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  // Define links dynamically
  const links = [
    { text: "Home", to: "/", additionalStyles: "" },
    { text: "About", to: "/about" },
  ];

  return (
    <>
      <Logo />
      <div className="absolute top-[51px] flex space-x-[150px] right-[28px]">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`w-[77px] h-[23px] text-[22px] font-light leading-[26.63px] font-inter ${link.additionalStyles}`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
