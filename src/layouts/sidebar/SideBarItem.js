import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SvgIcon } from "@mui/material";

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
      style={{ alignItems: "center", display: "flex" }}
    >
      <span className="sidebar__icon me-1">
        <img src={icon} alt="icon" style={{ height: 20, width: 20 }} />
      </span>
      <span className="sidebar__title">{title}</span>
      <span className="sidebar__line"></span>
    </Link>
  );
};

export default SideBarItem;
