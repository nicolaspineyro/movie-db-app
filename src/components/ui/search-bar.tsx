import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onChange }: { onChange: Function }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 200);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, []);

  return (
    <div className="flex bg-white-default backdrop-blur-lg p-3 mx-1 rounded-xl space-x-2 items-center border-2 border-gray-medium">
      <FaSearch className="w-5 h-5 text-gray-medium" />
      <input
        autoFocus
        name="search"
        placeholder="What are you looking for?"
        className="w-full appearance-none focus:outline-none"
        onChange={debouncedResults}
      />
    </div>
  );
};

export default SearchBar;
