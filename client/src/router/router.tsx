import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Homepage },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      { path: "product/:slug", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

export default router;
