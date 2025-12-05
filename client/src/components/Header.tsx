import { Menu, ShoppingCart } from "lucide-react";
import { CATEGORIES } from "../constants/navigationLinks";
import Logo from "./Logo";
import Links from "./Links";
const Header = () => {
  return (
    <header className="bg-black relative max-last-point:px-10 max-md:px-0 ">
      <div
        className={`container pt-8 pb-9 flex justify-between items-center border-b border-b-header-bottom max-md:px-6`}
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
        <div>
          <ShoppingCart className={`icon`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
