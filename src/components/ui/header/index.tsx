import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";
import { BsCameraReelsFill } from "react-icons/bs/index";

const Header = () => {
  return (
    <header className="flex justify-around fixed left-0 right-0 z-10 items-center bg-gradient-to-b from-black text-white py-4">
      <NavigationMenu />
      <h1 className="font-semibold text-lg">The Movie Nook</h1>
      <Link to={"/"} className="flex items-center">
        <BsCameraReelsFill className="w-6 h-6" />
      </Link>
    </header>
  );
};

export default Header;
