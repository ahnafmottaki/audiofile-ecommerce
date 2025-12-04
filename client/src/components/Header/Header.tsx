import logo from "../../assets/shared/desktop/logo.svg";
import { Menu, ShoppingCart } from "lucide-react";
import { NAVIGATION_LINKS } from "../../constants/navigationLinks";
const Header = () => {
  return (
    <header className="bg-black relative max-[1150px]:px-10 max-md:px-0">
      <div
        className={`container pt-8 pb-9 flex justify-between items-center border-b border-b-header-bottom`}
      >
        <div className={"flex items-center gap-x-10.5"}>
          <Menu className="lg:hidden inline text-white" />
          <img src={logo} alt="Audiophile logo" />
        </div>
        <nav className="hidden lg:block ">
          <ul className="flex items-center gap-x-8.5 ">
            {NAVIGATION_LINKS.map((li) => (
              <li
                key={li.href}
                className="font-bold text-[0.813rem] leading-6 tracking-[2px] uppercase cursor-pointer transition-colors duration-200 text-white hover:text-primary"
              >
                <a href={li.href}>{li.text}</a>
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
