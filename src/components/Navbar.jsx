import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  // Define links dynamically
  const links = [
    { text: "Home", to: "/", additionalStyles: "" },
    { text: "About", to: "/about" },
  ];

  return (
    <nav className="flex items-center  justify-between px-4 md:px-8 lg:px-12 py-4 ">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-4">
        <Logo />
      </div>

      {/* Right Side - Components */}
      <div className="flex items-center  gap-4">
        {/* Links Section */}
        <div className=" hidden md:flex space-x-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-lg md:text-xl font-light hover:underline mr-12"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Buttons Section */}
        <div className=" md:hidden flex gap-2">
          <Button
            btn="Login"
            bg="bg-[#E3E3E3]"
            hoverBg="hover:bg-gray-400"
            textColor="text-black"
            textSize="md:text-base"
            onClick={() => (window.location.href = "/login")}
          />
          <Button
            btn="Register"
            bg="bg-black"
            hoverBg="hover:bg-gray-900"
            textColor="text-white"
            hoverTextColor="hover:text-gray-300"
            textSize="md:text-sm"
            onClick={() => (window.location.href = "/register")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
