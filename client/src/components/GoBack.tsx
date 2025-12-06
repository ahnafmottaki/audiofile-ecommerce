import { Link, useLocation } from "react-router";

const GoBack = () => {
  const location = useLocation();
  return (
    <Link
      to={location.state.from || ".."}
      relative="route"
      className="capitalize opacity-50 block pt-8 pb-6 hover:text-primary font-medium text-sm leading-6"
    >
      go back
    </Link>
  );
};

export default GoBack;
