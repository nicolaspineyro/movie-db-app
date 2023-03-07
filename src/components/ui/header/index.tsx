import { Link } from "react-router-dom";
import NavigationMenu from "./navigation-menu";

const Header = () => {
  return (
    <header className="flex justify-between sticky inset-0 backdrop-blur-2xl z-10 items-center text-black px-5 py-4">
      <Link to={"/"} className="flex items-center">
        <h1 className="font-semibold mr-2">MovieDB Challenge</h1>
        <img src="/vite.svg" alt="logo" />
      </Link>

      <NavigationMenu />
    </header>
  );
};

export default Header;
