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
      {
        path: "/create-course",
        element: <Products />,
      },
      {
        path: "/material",
        element: <ProductDetails />,
      },
      {
        path: "/exam",
        element: <Checkout />,
      },
      {
        path: "/assignment",
        element: <Checkout />,
      },
      {
        path: "/grade",
        element: <Checkout />,
      },
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
