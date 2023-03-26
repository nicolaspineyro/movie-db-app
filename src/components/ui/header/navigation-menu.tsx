import SideBar from "./sidebar";
import { Link } from "react-router-dom";
import { capitalize } from "../../../utils/helpers";
import { AppRoutes } from "../../../utils/routes";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti/index";

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
          <TiThMenuOutline className="w-6 h-6" />
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
