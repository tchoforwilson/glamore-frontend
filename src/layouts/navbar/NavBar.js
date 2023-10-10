import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "./NavLink";
import { SearchWidget } from "../../components/searchwiget";
import { NavBarContext } from "../../contexts";

const NavBar = ({ onSearch }) => {
  const { isOpen, toggleNavBar } = useContext(NavBarContext);
  const handleSearch = () => onSearch();
  return (
    <nav className="app-nav">
      <MenuIcon
        className="app-nav__icon"
        onClick={() => toggleNavBar(!isOpen)}
      />
      <div className={`app-nav__collapse ${isOpen ? "active" : ""}`}>
        <ul className="app-nav__menu">
          <NavLink title="home" to="/app-home" />
          <NavLink title="shop" to="/shop" />
        </ul>
        <SearchWidget onSearch={handleSearch} />
      </div>
      <div className="nav-profile">
        <div className="nav-profile__cart">
          <ShoppingBagOutlinedIcon className="nav-profile__icon" />
          <span>1 item</span>
        </div>
        <div className="nav-profile__notification">
          <NotificationsOutlinedIcon className="nav-profile__icon" />
        </div>
        <Link className="nav-profile__user" to="/profile">
          <AccountCircleOutlinedIcon className="nav-profile__icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
