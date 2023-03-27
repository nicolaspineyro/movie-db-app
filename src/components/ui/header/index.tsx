import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";
import { TbEyeglass } from "react-icons/tb/index";
import useIsSticky from "../../../utils/hooks/useIsSticky";

const Header = () => {
  const { isSticky } = useIsSticky();
  return (
    <header
      className={`flex justify-around sticky inset-0 z-10 items-center bg-white-neutral bg-opacity-80 backdrop-blur-sm ${
        !isSticky ? "text-black" : "text-white"
      } transition-colors duration-700`}
    >
      <NavigationMenu />
      <h1 className="font-semibold text-lg">Movie Nook</h1>
      <Link to={"/"} className="flex items-center">
        <TbEyeglass className="w-8 h-8" />
      </Link>
    </header>
  );
};

export default Header;
