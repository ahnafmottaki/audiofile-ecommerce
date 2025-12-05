import { Link } from "react-router";
import logo from "/shared/desktop/logo.svg";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="Audiophile logo" />
    </Link>
  );
};

export default Logo;
