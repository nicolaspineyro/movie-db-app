import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      onClick={onClick}
      className=""
    >
      <FaSearch className="w-5 h-5" />
    </div>
  );
};

export default SearchBar;
