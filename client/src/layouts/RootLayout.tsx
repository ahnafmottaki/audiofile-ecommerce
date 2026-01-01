import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
const RootLayout = () => {
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
