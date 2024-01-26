import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDetailProduct } from "../Services/productService";
import IProduct from "../interfaces/IProduct";
import FullImageModal from "../Components/Modals/FullImageModal";
import Button from "../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { BUY_PRODUCT, SELL_PRODUCT } from "../redux/Slices/productSlices";
import ConfirmationModal from "../Components/Modals/ConfirmationModal";
import BackButton from "../Components/BackButton";
import SuccessModal from "../Components/Modals/SuccessModal";
import { ADD_VALUE, SUBTRACT_VALUE } from "../redux/Slices/coinsSlices";
import { useTheme } from "../Contexts/ThemeContext";
import MyProducts from "./MyProducts";
import { RootState } from "../redux/store";

const DetailProduct = () => {
  const { id, index } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [isFullImage, setIsFullImage] = useState(true);
  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [isEnoughModalVisible, setEnoughModalVisible] = useState(false);
  const locationObj = useLocation();
  const coins = useSelector((state: any) => state.coins.value);
  const isBuyButton = new URLSearchParams(locationObj.search).get(
    "isBuyButton"
  );
  const isMyProducts = new URLSearchParams(locationObj.search).get(
    "isMyProducts"
  );
  const { darkMode } = useTheme();

  const toggleImageModal = () => {
    setIsFullImage(!isFullImage);
  };

  const handleButtonClick = () => {
    const productIndex = parseInt(index || "0", 10);
    if (isBuyButton === "true" && product && coins < Math.ceil(product.price)) {
      setEnoughModalVisible(true);
    } else if (
      isBuyButton === "true" &&
      product &&
      coins >= Math.ceil(product.price)
    ) {
      dispatch(SUBTRACT_VALUE(Math.ceil(product.price)));
      dispatch(BUY_PRODUCT(product));
    } else if (isBuyButton === "false" && product) {
      dispatch(ADD_VALUE(Math.ceil(product.price)));
      dispatch(SELL_PRODUCT(productIndex));
    }
  };

  const handleSuccessModalClose = () => {
    setSuccessModalVisible(false);
  };

  useEffect(() => {
    getDetailProduct(id, (data: IProduct) => {
      setProduct(data);
    });
  });

  if (!product) {
    return (
      <p className="text-center h-screen flex items-center justify-center text-red-600 text-3xl font-bold">
        Loading...
      </p>
    );
  }
  return (
    <div className={darkMode ? "detail-product-background-dark" : ""}>
      <div className="w-6/12 mx-auto py-8">
        <BackButton url={isMyProducts ? "/myproducts" : "/"} />
        <div
          className={
            darkMode
              ? "product-card flex flex-col items-center my-8 pt-20 pb-8 bg-white"
              : "product-card flex flex-col items-center my-8 pt-20 pb-8"
          }
        >
          <button onClick={toggleImageModal}>
            <img src={product.image} alt={product.title} className="w-64" />
          </button>
          <div className="border-b border-solid w-1/2 border-1.5 border-black my-4"></div>
          <div className="w-1/2">
            <p className="text-2xl font-semibold">{product.title}</p>
            <p className="my-5 text-xl font-medium">Price</p>
            <p className="text-lg">${product.price} Coins</p>
            <p className="my-5 text-xl font-medium">Description</p>
            <p className="text-lg">{product.description}</p>
            <Button
              onClick={() => setConfirmationModalVisible(true)}
              text={isBuyButton === "true" ? "Buy" : "Sell"}
              className={
                darkMode
                  ? "button-background-buy-dark rounded shadow-xl mt-12 p-5 w-full"
                  : "button-background-buy rounded shadow-xl mt-12 p-5 w-full"
              }
              textStyle={"text-white text-2xl font-bold"}
            />
          </div>
        </div>
        {isConfirmationModalVisible && (
          <ConfirmationModal
            isVisible={isConfirmationModalVisible}
            isBuy={isBuyButton === "true" ? true : false}
            onClose={() => setConfirmationModalVisible(false)}
            onClick={() => {
              setSuccessModalVisible(true);
              handleButtonClick();
            }}
          />
        )}
        <SuccessModal
          isVisible={isSuccessModalVisible}
          onClose={handleSuccessModalClose}
          isBuy={
            isEnoughModalVisible
              ? "failed"
              : isBuyButton === "true"
              ? "true"
              : "false"
          }
        />
        <FullImageModal
          isVisible={isFullImage}
          onClose={toggleImageModal}
          imageUrl={product.image}
        />
      </div>
    </div>
  );
};

export default DetailProduct;
