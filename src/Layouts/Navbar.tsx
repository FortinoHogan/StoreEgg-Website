import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import MyCoins from "../Components/MyCoins";
import INavbar from "../interfaces/INavbar";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { useTheme } from "../Contexts/ThemeContext";

const Navbar = (props: INavbar) => {
  const { onSearch } = props;
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "navbar-background-dark min-h-44 flex flex-col items-center" : "navbar-background min-h-44 flex flex-col items-center"}>
      <div className="flex flex-col w-9/12 mt-3">
        <SearchBar onSearch={onSearch} />
        <div className="pt-5 flex justify-between relative">
          <Link to="/myproducts">
            <Button
              className={"button-background absolute rounded shadow-xl myproducts-button"}
              text={"My Products >"}
              textStyle={"text-lg font-semibold p-3"}
            />
          </Link>
          <MyCoins />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
