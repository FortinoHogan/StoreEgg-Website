import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";
import IBackButton from "../interfaces/IBackButton";

const BackButton = (props: IBackButton) => {
  const { darkMode } = useTheme();
  const { url } = props;
  return (
    <>
      <Link to={url} className={darkMode ? "text-3xl font-bold text-white" : "text-3xl font-bold"}>
        {"<"}Back
      </Link>
    </>
  );
};

export default BackButton;
