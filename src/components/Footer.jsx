import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from "../assets/SmallLogo.svg";

function Footer() {
  return (
    <footer className=" py-8 absolute top-[2351px] p-6 sm:top-[3376px] md:top-[4530px] lg:top-[5104px]">
      <div className="container mx-auto flex justify-between md:flex-wrap">
        {/* Left Div */}
        <div className="mb-6 ">
          <div className="flex flex-col items-start">
            {/* Logo */}
            <img
              className="w-[25px] h-6 sm:w-9 sm:h-7 md:w-[72px] md:h-14 lg:w-[95.2px] lg:h-[87px]"
              src={Logo}
              alt="Logo"
            />

            {/* Social Icons */}
            <div className="flex space-x-2 mt-3">
              <a href="#" aria-label="Twitter" className="hover:text-blue-500">
                <FaTwitter className="text-lg md:text-xl lg:text-2xl" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram className="text-lg md:text-xl lg:text-2xl" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-700">
                <FaFacebookF className="text-lg md:text-xl lg:text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex space-x-16 w-[284px] h-40 sm:w-[450px] sm:h-60 md:w-[560px] md:h-72 md:ml-8 p-6 rounded-md bg-[#FBF8ED] sm:ml-4 lg:w-[881px] lg:h-[460px] lg:gap-10 lg:ml-10 justify-evenly">
          {/* About Section */}
          <div>
            <ul className="space-y-2 text-[10px] md:text-[16px] text-[#727171] lg:text-2xl">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  User Agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guest Controls
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Languages
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <ul className="space-y-2  text-[10px] md:text-[16px] text-[#727171] lg:text-2xl">
              <li>
                <a href="#" className="hover:underline">
                  Copyright Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Brand Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
