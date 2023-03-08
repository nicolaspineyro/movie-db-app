import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";

const Header = () => {
  return (
    <header className="flex justify-between sticky inset-0 z-10 items-center text-black p-5">
      <NavigationMenu />
      <Link to={"/"} className="flex items-center">
        <h1 className="font-semibold mr-2">MovieDB App</h1>
        <img src="/vite.svg" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
