import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-end space-x-2 opacity-80">
      <FaSearch className="w-5 h-5" />
    </div>
  );
};

export default SearchBar;
