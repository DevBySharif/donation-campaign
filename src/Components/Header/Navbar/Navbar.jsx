import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center pt-12">
        <Logo></Logo>
        <ul className="flex justify-center items-center gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-lg font-bold text-[#FF444A] underline"
                  : "text-lg font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-lg font-bold text-[#FF444A] underline"
                  : "text-lg font-bold"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-lg font-bold text-[#FF444A] underline"
                  : "text-lg font-bold"
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
