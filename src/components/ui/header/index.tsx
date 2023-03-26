import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";
import { TbEyeglass } from "react-icons/tb/index";

const Header = () => {
  return (
    <header className="flex justify-around sticky inset-0 z-10 items-center bg-black bg-opacity-80 backdrop-blur-sm text-white">
      <NavigationMenu />
      <h1 className="font-semibold text-lg">Movie Nook</h1>
      <Link to={"/"} className="flex items-center">
        <TbEyeglass className="w-8 h-8" />
      </Link>
    </header>
  );
};

export default Header;
