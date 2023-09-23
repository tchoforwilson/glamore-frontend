import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * @breif Render side navigation
 * @param {String} icon Sidebar item icon name
 * @param {String} title Title of sidebar item
 * @param {String} to Sidebar path name
 * @returns
 */
const SideBarItem = ({ icon, title, to }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Link
      to={to}
      className={`sidebar__item ${pathname === to ? "active" : ""}`}
    >
      <span className="sidebar__icon"></span>
      <span className="sidebar__title">{title}</span>
      <span className="sidebar__line"></span>
    </Link>
  );
};

export default SideBarItem;
