import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchWidget } from "../../components/searchwiget";
import { Notifications } from "../../components/notifications";
import NavLink from "./NavLink";
import { CartDropdown } from "../../components/dropdown";
import { NavBarContext } from "../../contexts";
import notifications from "./notifications";

const NavBar = ({ onSearch }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [showNotification, toggleNotification] = useState(false);
  const { isOpen, toggleNavBar } = useContext(NavBarContext);

  const handleSearch = () => onSearch();

  useEffect(() => {
    const section = document.getElementById("section-sticky");
    const handleScroll = () => {
      const { top } = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop >= top);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`nav ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <MenuIcon className="nav__icon" onClick={() => toggleNavBar(!isOpen)} />
        <div className={`nav__collapse ${isOpen ? "active" : ""}`}>
          <ul className="nav__menu">
            <NavLink title="home" to="/home" />
            <NavLink title="shop" to="/shop" />
          </ul>
          <SearchWidget onSearch={handleSearch} />
        </div>
        {/* Public links */}

        {/* Private links */}
        <div className="nav-profile">
          <div className="nav-profile__cart">
            <IconButton
              className="nav-profile__btn"
              onClick={() => setShowBag(!showBag)}
            >
              <ShoppingBagOutlinedIcon className="nav-profile__icon" />
            </IconButton>
            <span>1 item</span>
            <CartDropdown active={showBag} />
          </div>
          <div className="nav-profile__notification">
            <IconButton
              className="nav-profile__btn"
              onClick={() => toggleNotification(!showNotification)}
            >
              <NotificationsOutlinedIcon className="nav-profile__icon" />
            </IconButton>
            <span className="nav-profile__badge">12</span>
            <Notifications
              notifications={notifications}
              active={showNotification}
            />
          </div>
          <Link className="nav-profile__user" to="/profile">
            <IconButton className="nav-profile__btn">
              <AccountCircleOutlinedIcon className="nav-profile__icon" />
            </IconButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
