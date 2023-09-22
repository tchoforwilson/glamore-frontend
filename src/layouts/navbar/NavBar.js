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
        <div className="app-nav__profile">
          <div className="app-nav__profile-carts">
            <ShoppingBagOutlinedIcon />
            <span>1 item</span>
          </div>
          <div className="app-nav__profile-notifications">
            <NotificationsOutlinedIcon />
          </div>
          <Link className="app-nav__profile-user" to="/profile">
            <AccountCircleOutlinedIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
