import Logo from "./Logo";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };
  const redirectSign = () => {
    navigate("/signup");
  };
  return (
    <nav className="flex items-center justify-end px-4 md:px-8 lg:px-12 py-4 w-[104%]">
      <div className="flex items-center space-x-4">
        <Logo />
      </div>

      <div className="flex gap-2 ml-4 justify-end">
        <Button
          btn="Login"
          bg="bg-[#E3E3E3]"
          hoverBg="hover:bg-gray-400"
          textColor="text-black"
          textSize="md:text-base"
          fn={redirectLogin}
        />
        <Button
          btn="Register"
          bg="bg-black"
          hoverBg="hover:bg-gray-900"
          textColor="text-white"
          hoverTextColor="hover:text-gray-300"
          textSize="md:text-sm"
          fn={redirectSign}
        />
      </div>
    </nav>
  );
};

export default Navbar;
