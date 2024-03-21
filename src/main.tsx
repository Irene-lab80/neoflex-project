import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {HomePage} from "./routes/home";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Cart} from "./routes/cart";
import "normalize.css";
import {ROUTES} from "./components/footer/ui/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
