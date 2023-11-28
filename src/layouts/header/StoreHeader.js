import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBarContext } from "../../contexts";

const Header = ({ title }) => {
  const { isOpen, toggleSideBar } = useContext(SideBarContext);
  return (
    <header className="header">
      <MenuIcon
        className="header__icon"
        onClick={() => toggleSideBar(!isOpen)}
      />
      <span className="header__title">{title}</span>
    </header>
  );
};

export default Header;
