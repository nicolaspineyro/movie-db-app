import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";
import { TbEyeglass } from "react-icons/tb/index";
import useIsSticky from "../../../utils/hooks/useIsSticky";
import SearchBar from "../search-bar";

const Header = () => {
  const { isSticky } = useIsSticky();
  return (
    <header
      className={`w-full sticky px-5 py-3 items-center flex justify-between inset-0 z-10 bg-white-neutral bg-opacity-80 backdrop-blur-sm ${
        !isSticky ? "text-black" : "text-white-default"
      } transition-colors duration-700`}
    >
      <NavigationMenu />
      <Link to={"/"} className="flex items-center justify-center p-0">
        <TbEyeglass className="w-8 h-8" />
      </Link>
      <SearchBar />
    </header>
  );
};

export default Header;
