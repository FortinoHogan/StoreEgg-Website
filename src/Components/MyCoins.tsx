import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../Contexts/ThemeContext";
import { RootState } from "../redux/store";

const MyCoins = () => {
  const { darkMode } = useTheme();
  // localStorage.removeItem("persist:root");
  const value = useSelector((state: RootState) => state.coins.value);
  return (
    <div className="button-background absolute right-0 rounded shadow-2xl">
      <div className="py-2 pl-8 pr-3 text-right">
        <span className={darkMode ? "coins-dark text-4xl font-extrabold" : "coins text-4xl font-extrabold"}>{value}</span>
        <div>{"My Coins"}</div>
      </div>
    </div>
  );
};

export default MyCoins;
