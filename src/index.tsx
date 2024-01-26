import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Pages/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailProduct from "./Pages/DetailProduct";
import MyProducts from "./Pages/MyProducts";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Minigame from "./Pages/Minigame";
import { ThemeProvider } from "./Contexts/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <DetailProduct />,
  },
  {
    path: "/myproducts",
    element: <MyProducts />,
  },
  {
    path: "/minigame",
    element: <Minigame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
