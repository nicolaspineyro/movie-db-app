import { Dispatch, SetStateAction } from "react";
import { filtersMenu } from "../../utils/static-data";

const FiltersMenu = ({
  setSelected,
  selected,
}: {
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex justify-around">
      {filtersMenu.map(({ name, icon, id }, index) => (
        <div className="text-center" key={`filters-menu-${index}`}>
          <button
            key={`menu-icon-${id}`}
            className={` ${
              selected === id
                ? "text-white bg-red-default"
                : "text-red-default bg-white"
            } rounded-2xl transition-all duration-300 ease-linear shadow-lg p-6`}
            onClick={() =>
              selected === id ? setSelected(-1) : setSelected(id)
            }
          >
            {icon}
          </button>
          <p className="text-xl mt-3">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default FiltersMenu;
