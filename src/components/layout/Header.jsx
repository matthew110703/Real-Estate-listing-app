import { Link } from "react-router-dom";

// UI
import { Button } from "../ui";

// Icons
import { BiBuildingHouse } from "react-icons/bi";

const navLinks = [
  { id: 1, title: "Home", path: "/dashboard" },
  { id: 2, title: "Properties", path: "#" },
  { id: 3, title: "About", path: "#" },
  { id: 4, title: "Services", path: "#" },
];

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-6 shadow-lg">
      <Link to="/dashboard">
        <div className="flex items-center gap-x-2">
          <BiBuildingHouse size={32} />
          <h1 className="text-lg font-bold before:mr-0.5 before:font-serif before:text-2xl before:font-semibold before:content-['My']">
            Estate.com
          </h1>
        </div>
      </Link>

      <nav className="hidden md:block md:text-sm lg:text-base">
        <ul className="flex gap-x-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className="hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-x-4">
        <button className="text-sm">Contact Us</button>
        <Button text={"Logout"} />
      </div>
    </header>
  );
};

export default Header;
