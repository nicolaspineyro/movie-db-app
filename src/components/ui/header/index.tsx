import { Link, Router } from "react-router-dom";
import NavigationMenu from "./navigation-menu";
import { TbEyeglass } from "react-icons/tb/index";
import useIsSticky from "../../../utils/hooks/useIsSticky";
import SearchBar from "../search-bar";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const { isSticky } = useIsSticky();

  return (
    <header
      className={`w-full flex px-5 py-3  bg-white-neutral bg-opacity-80 backdrop-blur-md z-10 sticky h-auto items-center justify-between inset-0 ${
        !isSticky ? "text-gray-dark" : "text-white-default"
      } transition-all duration-500`}
    >
      <div className={`transition-opacity duration-700`}>
        <NavigationMenu />
      </div>
      <Link
        to={"/"}
        className={`flex items-center justify-center p-0 transition-opacity duration-700`}
      >
        <TbEyeglass className="w-6 h-6" />
      </Link>
      <Link to={"/search"} className="">
        <FaSearch className={`w-5 h-5`} />
      </Link>
    </header>
  );
};

export default Header;
