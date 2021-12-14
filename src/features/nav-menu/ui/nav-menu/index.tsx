import { NavLink } from "react-router-dom";

import "./index.module.scss";

export const NavMenu = () => {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </nav>
  );
};
