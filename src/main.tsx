import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {HomePage} from "./routes/home";
import {RouterProvider, createHashRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Cart} from "./routes/cart";
import "normalize.css";
import {ROUTES} from "./components/footer/ui/Footer";
import CartContextProvider from "./provider";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        // path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
