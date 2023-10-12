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
    <nav className="nav">
      <MenuIcon className="nav__icon" onClick={() => toggleNavBar(!isOpen)} />
      <div className={`nav__collapse ${isOpen ? "active" : ""}`}>
        <ul className="nav__menu">
          <NavLink title="home" to="/home" />
          <NavLink title="shop" to="/shop" />
        </ul>
        <SearchWidget onSearch={handleSearch} />
      </div>
      {/* Public links */}
      <div className="nav-links">
        <Link className="nav-links__item btn btn--white" to="/signup">
          Create account
        </Link>
        <Link className="nav-links__item btn btn--secondary" to="/login">
          Log in
        </Link>
      </div>
      {/* Private links */}
      <div className="nav-profile">
        <div className="nav-profile__cart">
          <ShoppingBagOutlinedIcon className="nav-profile__icon" />
          <span>1 item</span>
        </div>
        <div className="nav-profile__notification">
          <NotificationsOutlinedIcon className="nav-profile__icon" />
          <span className="nav-profile__badge">12</span>
        </div>
        <Link className="nav-profile__user" to="/profile">
          <AccountCircleOutlinedIcon className="nav-profile__icon" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
