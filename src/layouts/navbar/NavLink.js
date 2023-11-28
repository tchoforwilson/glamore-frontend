import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * @breif Render a navigation link for the nav bar
 * @param {String} title Title of navigation link
 * @param {String} to Link to navigate to
 */
const NavLink = ({ title, to }) => {
  const location = useLocation();
  return (
    <li className="nav__item">
      <Link
        className={`nav__link ${location.pathname === to ? "active" : ""}`}
        to={to}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
