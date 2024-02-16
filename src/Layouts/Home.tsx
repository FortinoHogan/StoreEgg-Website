import React, { useEffect, useState, useContext } from "react";
import ListViewIcon from "../assets/icon/ListViewIcon";
import IProduct from "../interfaces/IProduct";
import IHome from "../interfaces/IHome";
import GridViewIcon from "../assets/icon/GridViewIcon";
import ProductCard from "../Components/ProductCard";
import { getProduct } from "../Services/productService";
import { useTheme } from "../Contexts/ThemeContext";

const Home = (props: IHome) => {
  const { searchQuery } = props;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [gridView, setGridView] = useState<boolean>(true);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    getProduct((data: IProduct[]) => {
      setProducts(data);
      setDataLoaded(true);
    });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleView = () => {
    setGridView(!gridView);
  };

  const toggleDarkModeButton = () => {
    toggleDarkMode();
  };

  return (
    <div
      className={
        darkMode
          ? "home-background-dark flex flex-col items-center"
          : "flex flex-col items-center"
      }
    >
      <div className="w-9/12 pt-8 flex justify-between">
        <h1
          className={
            darkMode ? "font-bold text-2xl text-white" : "font-bold text-2xl"
          }
        >
          Avalilable Products
        </h1>
        <div className="flex gap-20 items-center">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleDarkModeButton}
              checked={darkMode}
            ></input>
            <span className="slider round"></span>
          </label>
          <div>
            <button onClick={toggleView}>
              {gridView ? <ListViewIcon /> : <GridViewIcon />}
            </button>
          </div>
        </div>
      </div>
      {!dataLoaded && (
        <p
          className={
            darkMode
              ? "min-h-screen text-center flex items-center justify-center text-gray-300 text-3xl font-bold"
              : "min-h-screen text-center flex items-center justify-center text-red-600 text-3xl font-bold"
          }
        >
          Loading...
        </p>
      )}
      {dataLoaded && (
        <ProductCard filteredProducts={filteredProducts} gridView={gridView} />
      )}
    </div>
  );
};

export default Home;
