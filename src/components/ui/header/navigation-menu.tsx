import SideBar from "./sidebar";
import { Link } from "react-router-dom";
import { capitalize } from "../../../utils/helpers";
import { AppRoutes } from "../../../utils/routes";
import { useState } from "react";

const NavigationMenu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <nav>
      <div
        className="sm:hidden	"
        id={"mobile-hamburger"}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <button
          className="flex items-center p-3"
          onClick={() => console.log("show")}
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <section className="hidden sm:flex" id={"desktop-menu"}>
        {AppRoutes.map(
          ({ path, id, name, menu }) =>
            menu && (
              <Link to={path} key={`menu-item-${id}`}>
                {capitalize(name)}
              </Link>
            )
        )}
      </section>

      {/* <SideBar toggleMenu={toggleMenu} /> */}
    </nav>
  );
};

export default NavigationMenu;
