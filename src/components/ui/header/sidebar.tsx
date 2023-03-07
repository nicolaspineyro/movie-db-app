import { ReactElement } from "react";
import { FaHeart, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ toggleMenu }: { toggleMenu: boolean }) => {
  return (
    <section
      className={`fixed inset-0 top-20 flex flex-col ${
        !toggleMenu ? "hidden" : ""
      }`}
    >
      <Link to={"/"}>
        <SideBarIcon icon={<FaHome size="28" />} text={"Home"} />
      </Link>

      <Divider />
      <Link to={"/favorites"}>
        <SideBarIcon icon={<FaHeart size="28" />} text={"Favorites"} />
      </Link>
    </section>
  );
};

const SideBarIcon = ({ icon, text }: { icon: ReactElement; text: string }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
