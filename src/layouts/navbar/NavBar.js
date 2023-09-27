import React from "react";
import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { SearchWidget } from "../../components/searchwiget";

const NavBar = ({ onSearch }) => {
  const handleSearch = () => onSearch();
  return (
    <nav className="app-nav">
      <div className="app-nav__collapse">
        <ul className="app-nav__menu">
          <li className="app-nav__item">
            <Link className="app-nav__link" to="/app-home">
              home
            </Link>
          </li>
          <li className="app-nav__item">
            <Link className="app-nav__link" to="/app-shop">
              shop
            </Link>
          </li>
        </ul>
        <SearchWidget onSearch={handleSearch} />
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
      </div>
    </nav>
  );
};

export default NavBar;
