import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

import NotFound from "../layouts/NotFound";
import Home from "../Components/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      //   {
      //     path: "/products",
      //     element: <Products />,
      //   },
      //   {
      //     path: "/product-details/:id",
      //     element: <ProductDetails />,
      //   },
      //   {
      //     path: "/checkout",
      //     element: <Checkout />,
      //   },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
]);

export default routes;
