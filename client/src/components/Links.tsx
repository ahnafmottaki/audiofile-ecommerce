import { Link } from "react-router";
import { CATEGORIES } from "../constants/navigationLinks";

const Links = () => {
  return (
    <>
      <li className="font-bold text-[0.813rem] leading-6 tracking-[2px] uppercase cursor-pointer transition-colors duration-200 text-white hover:text-primary">
        <Link to={`/`}>Home</Link>
      </li>
      {CATEGORIES.map((li) => (
        <li
          key={li.name}
          className="font-bold text-[0.813rem] leading-6 tracking-[2px] uppercase cursor-pointer transition-colors duration-200 text-white hover:text-primary"
        >
          <Link to={`/${li.name}`}>{li.name}</Link>
        </li>
      ))}
    </>
  );
};

export default Links;
