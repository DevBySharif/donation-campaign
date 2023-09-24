import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-lg font-bold text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
