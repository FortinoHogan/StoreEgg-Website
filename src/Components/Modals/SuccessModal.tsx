import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ISuccessModal from "../../interfaces/ISuccessModal";

const SuccessModal = (props: ISuccessModal) => {
  const { isVisible, onClose, isBuy } = props;
  const coins = useSelector((state: any) => state.coins.value);

  return (
    <div
      className={
        isVisible
          ? "fixed bg-black bg-opacity-70 top-0 left-0 w-screen h-screen flex flex-row justify-center"
          : "hidden"
      }
    >
      <div className="flex flex-col justify-center">
        <div className="bg-white p-8 rounded h-fit">
          {isBuy === "failed" ? (
            <>
              <h1 className="text-center text-3xl font-bold">Failed!</h1>
              <p className="font-medium text-xl mt-3">Not Enough Coins</p>
            </>
          ) : (
            <>
              <h1 className="text-center text-3xl font-bold">Success!</h1>
              <p className="font-medium text-xl mt-3">
                The product was {isBuy ? "bought" : "sold"} successfully!
                <br />
                Your current balance is {coins}
              </p>
            </>
          )}
          <div className="flex justify-end">
            {isBuy === "true" ? (
              <Link
                to="/"
                className="p-3 bg-black text-white rounded mt-5 font-medium text-2xl"
              >
                OK
              </Link>
            ) : isBuy === "failed" ? (
              <Link
                to="/"
                className="p-3 bg-black text-white rounded mt-5 font-medium text-2xl"
              >
                OK
              </Link>
            ) : (
              <Link
                to="/myproducts"
                className="p-3 bg-black text-white rounded mt-5 font-medium text-2xl"
              >
                OK
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
