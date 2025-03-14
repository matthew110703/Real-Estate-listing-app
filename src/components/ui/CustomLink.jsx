import { Link } from "react-router-dom";

const CustomLink = ({ label, to }) => {
  return (
    <Link
      to={to || "#"}
      className="text-primary text-xs font-semibold md:text-sm"
    >
      {label}
    </Link>
  );
};

export default CustomLink;
