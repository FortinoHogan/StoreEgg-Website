import React from "react";
import IProductCard from "../interfaces/IProductCard";
import IProduct from "../interfaces/IProduct";
import { Link } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";

const ProductCard = (props: IProductCard) => {
  const { filteredProducts, gridView } = props;
  const {darkMode} = useTheme();
  return (
    <div className="w-9/12 mb-6">
      {filteredProducts.length > 0 ? (
        <div className={gridView ? "" : "grid grid-cols-2 gap-4"}>
          {filteredProducts.map((product: IProduct) => (
            <Link key={product.id} to={`/product/${product.id}?isBuyButton=true`}>
              <div
                className={darkMode ? "product-card flex items-center p-7 mt-6 bg-white" : "product-card flex items-center p-7 mt-6"}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image w-20 h-20"
                />
                <div className="ml-5">
                  <h1 className="font-bold">{product.title}</h1>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center font-bold text-3xl text-red-600 mt-5">
          No products found
        </p>
      )}
    </div>
  );
};

export default ProductCard;
