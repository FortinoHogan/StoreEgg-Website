import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BackButton from "../Components/BackButton";
import { useTheme } from "../Contexts/ThemeContext";
import { ADD_VALUE } from "../redux/Slices/coinsSlices";

const Minigame = () => {
  const dispatch = useDispatch();
  const [eggImageSource, setEggImageSource] = useState(
    require("../assets/img/egg-full.png")
  );
  const [coinImageSource, setCoinImageSource] = useState(null);
  const [contentText, setContentText] = useState("");
  const [footerText, setFooterText] = useState("");
  const [isClicked, setClicked] = useState(false);
  const { darkMode } = useTheme();
  const handleClick = () => {
    if (eggImageSource === require("../assets/img/egg-broken.png")) {
      return;
    }

    let coinImageSource;
    let coinValue: any;
    let coinText;
    setClicked(true);
    const randomCoinType = Math.floor(Math.random() * 3);

    switch (randomCoinType) {
      case 0:
        coinImageSource = require("../assets/img/bronze-coin.png");
        coinValue = 20;
        coinText = "bronze";
        break;
      case 1:
        coinImageSource = require("../assets/img/silver-coin.png");
        coinValue = 50;
        coinText = "silver";
        break;
      case 2:
        coinImageSource = require("../assets/img/gold-coin.png");
        coinValue = 100;
        coinText = "gold";
        break;
      default:
        break;
    }
    setEggImageSource(require("../assets/img/egg-broken.png"));
    setCoinImageSource(coinImageSource);
    setContentText(`${coinText}`);
    setFooterText(`${coinValue} coins have been added to your balance`);
    dispatch(ADD_VALUE(coinValue));
  };
  return (
    <div className={darkMode ? "minigame-background-dark h-screen" : ""}>
      <div className="flex flex-col">
        <div className="w-9/12 mx-auto my-5">
          <div className="flex items-center relative">
            <h1
              className={
                darkMode
                  ? "absolute text-3xl text-white font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  : "absolute text-3xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              }
            >
              Minigame
            </h1>
            <BackButton url={"/"} />
          </div>
          <div className="flex justify-center flex-col items-center mt-10">
            <div className="flex justify-center gap-20">
              <div className="flex items-center">
                <img
                  src={require("../assets/img/gold-coin.png")}
                  alt="goldCoin"
                  className="w-16"
                />
                <p className={darkMode ? "text-white text-xl" : "text-xl"}>100</p>
              </div>
              <div className="flex items-center">
                <img
                  src={require("../assets/img/silver-coin.png")}
                  alt="silverCoin"
                  className="w-16"
                />
                <p className={darkMode ? "text-white text-xl" : "text-xl"}>50</p>
              </div>
              <div className="flex items-center">
                <img
                  src={require("../assets/img/bronze-coin.png")}
                  alt="bronzeCoin"
                  className="w-16"
                />
                <p className={darkMode ? "text-white text-xl" : "text-xl"}>20</p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-32">
              {isClicked ? (
                <div className="flex flex-col items-center absolute top-1/4 translate-y-8">
                  <h1 className={darkMode ? "text-3xl font-bold text-slate-100" : "text-3xl font-bold"}>Congratulations</h1>
                  <p className={darkMode ? "text-white text-2xl" : "text-2xl font-normal"}>
                    You got a {contentText} coin!
                  </p>
                </div>
              ) : (
                <div>
                  <p className={darkMode ? "text-white text-2xl font-normal" : "text-2xl font-normal"}>
                    Click on the egg to get your prize!
                  </p>
                </div>
              )}
              <button onClick={handleClick}>
                {isClicked ? (
                  <div>
                    <img src={`${coinImageSource}`} className="w-24 absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <img
                      src={
                        isClicked
                          ? require("../assets/img/egg-broken.png")
                          : require("../assets/img/egg-full.png")
                      }
                      className="absolute text-3xl font-bold top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                ) : (
                  <img
                    src={
                      isClicked
                        ? require("../assets/img/egg-broken.png")
                        : require("../assets/img/egg-full.png")
                    }
                    className="absolute text-3xl font-bold top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}
              </button>
              <div className={darkMode ? "absolute bottom-28 font-semibold text-2xl text-white" : "absolute bottom-28 font-semibold text-2xl"}>
                {footerText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minigame;
