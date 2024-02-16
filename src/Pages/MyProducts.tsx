import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import IProduct from "../interfaces/IProduct";
import { Link } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { useTheme } from "../Contexts/ThemeContext";

const MyProducts = () => {
  const { darkMode } = useTheme();
  const myProducts: IProduct[] | undefined = useSelector(
    (state: RootState) => state.product.data
  );

  if (!myProducts) {
    return <p>Loading...</p>;
  }
  return (
    <div className={darkMode ? "myproducts-background-dark h-screen mt-0" : ""}>
      <div className="w-6/12 mx-auto py-8">
        <BackButton url={"/"} />
        <div className="myproduct-card bg-white rounded">
          <h2 className="text-3xl font-bold text-center mt-10 pt-10">
            My Products
          </h2>
          {myProducts.length === 0 ? (
            <p className="text-center font-bold text-3xl text-red-600 pt-10 pb-10">
              No products found
            </p>
          ) : (
            <div className="px-5 pt-1 py-10 mt-5">
              {myProducts.map((product, index) => (
                <Link
                  key={`${product.id}_${index}`}
                  to={`/product/${product.id}?isBuyButton=false&isMyProducts=false&index=${index}`}
                >
                  <div className="product-card flex items-center p-7 mt-4 mx-10">
                    <img
                      src={product.image}
                      alt="productImage"
                      className="product-image w-20 h-20"
                    />
                    <div className="ml-5">
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
