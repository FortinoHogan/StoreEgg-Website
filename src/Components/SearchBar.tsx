import React, { useState } from "react";
import SearchIcon from "../assets/icon/SearchIcon";
import ISearch from "../interfaces/ISearch";

const SearchBar = (props: ISearch) => {
  const {onSearch} = props;
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };
  return (
    <div className="pt-5 flex justify-center">
      <div className="flex items-center bg-white w-full h-12 flex items-center rounded shadow-xl pl-4">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Product.."
          className="pl-4 outline-none"
          value={query}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
