import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";

const MinigameButton = () => {
  const { darkMode } = useTheme();
  return (
    <div className="fixed right-5 bottom-5 flex justify-end">
      <div
        className={
          darkMode
            ? "minigame-button-background-dark rounded-full w-fit"
            : "minigame-button-background rounded-full w-fit"
        }
      >
        <Link to={"/minigame"}>
          <img
            src={require("../assets/img/egg-full.png")}
            alt="minigameButton"
            className="py-4 px-6 w-24"
          />
        </Link>
      </div>
    </div>
  );
};

export default MinigameButton;
