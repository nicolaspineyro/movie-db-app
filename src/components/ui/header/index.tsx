import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";
import { TbEyeglass } from "react-icons/tb/index";
import useIsSticky from "../../../utils/hooks/useIsSticky";
import SearchBar from "../search-bar";
import { useState } from "react";

const Header = () => {
  const { isSticky } = useIsSticky();
  const [search, setSearch] = useState(false);
  return (
    <header
      className={`w-full flex px-5 py-3  bg-white-neutral bg-opacity-80 backdrop-blur-md ${
        search
          ? "translate translate-x--full"
          : `z-10 sticky h-auto items-center justify-between inset-0 ${
              !isSticky ? "text-black" : "text-white-default"
            }`
      } transition-all duration-500`}
    >
      <div
        className={`${
          !search ? "opacity-1" : "opacity-0"
        } transition-opacity duration-700`}
      >
        <NavigationMenu />
      </div>
      <Link
        to={"/"}
        className={`flex items-center justify-center p-0 ${
          !search ? "opacity-1" : "opacity-0"
        } transition-opacity duration-700`}
      >
        <TbEyeglass className="w-6 h-6" />
      </Link>

      <SearchBar onClick={() => setSearch(!search)} />
    </header>
  );
};

export default Header;
