import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import ToastifyContainer from "../components/ToastifyContainer";
const RootLayout = () => {
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <ToastifyContainer />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
