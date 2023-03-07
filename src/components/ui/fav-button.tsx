import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FavButton = ({ initialState }: { initialState: boolean }) => {
  const [selected, setSelected] = useState(initialState);
  return (
    <button
      onClick={() => setSelected(!selected)}
      className={` ${
        selected ? "text-red-default" : "text-white"
      } rounded-2xl transition-all duration-300 ease-linear shadow-lg p-3`}
    >
      <FaHeart size={50} />
    </button>
  );
};

export default FavButton;
