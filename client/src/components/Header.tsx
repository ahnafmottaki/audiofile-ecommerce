import { Menu, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import Links from "./Links";
import { Activity, useState } from "react";
import Cart from "./Cart";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cartShowHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <header className="bg-black sticky top-0 z-999999">
      {/* cart */}
      <Activity mode={showCart ? "visible" : "hidden"}>
        <Cart cartShowHandler={cartShowHandler} />
      </Activity>
      <div
        className={`container h-22.5 sm:h-24 flex justify-between items-center border-b border-b-header-bottom last-point:px-0 sm:px-10 px-6`}
      >
        <div className={"flex items-center gap-x-10.5"}>
          <Menu className="lg:hidden inline text-white" />
          <Logo />
        </div>
        <nav className="hidden lg:block ">
          <ul className="flex items-center gap-x-8.5 ">
            <Links />
          </ul>
        </nav>
        <div onClick={cartShowHandler}>
          <ShoppingCart className={`icon ${showCart ? " active " : ""}`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
