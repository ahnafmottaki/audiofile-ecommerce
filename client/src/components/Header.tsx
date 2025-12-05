import logo from "../assets/shared/desktop/logo.svg";
import { Menu, ShoppingCart } from "lucide-react";
import { CATEGORIES } from "../constants/navigationLinks";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="bg-black relative max-last-point:px-10 max-md:px-0 ">
      <div
        className={`container pt-8 pb-9 flex justify-between items-center border-b border-b-header-bottom max-md:px-6`}
      >
        <div className={"flex items-center gap-x-10.5"}>
          <Menu className="lg:hidden inline text-white" />
          <Link to={"/"}>
            <img src={logo} alt="Audiophile logo" />
          </Link>
        </div>
        <nav className="hidden lg:block ">
          <ul className="flex items-center gap-x-8.5 ">
            {CATEGORIES.map((li) => (
              <li
                key={li.name}
                className="font-bold text-[0.813rem] leading-6 tracking-[2px] uppercase cursor-pointer transition-colors duration-200 text-white hover:text-primary"
              >
                <Link to={`/${li.name}`}>{li.name}</Link>
              </li>
            ))}
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
