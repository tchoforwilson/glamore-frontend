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
    <li className={`app-nav__item ${location.pathname === to ? "active" : ""}`}>
      <Link className="app-nav__link" to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
