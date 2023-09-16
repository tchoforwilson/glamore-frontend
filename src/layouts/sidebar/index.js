import React from "react";
import { SearchWidget } from "../../components/searchwiget";
import { SearchURLContext } from "../../contexts";
import SideBarItem from "./SideBarItem";

const items = [
  { title: "dashboard", to: "/dashboard" },
  { title: "Listings", to: "/listings" },
  { title: "orders", to: "/orders" },
  { title: "finances", to: "/finances" },
  { title: "marketing", to: "/marketing" },
  { title: "settings", to: "/settings" },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <img
        src={require("../../assets/logos/glamore-logo.png")}
        alt="Glamore  Logo"
        className="sidebar__logo"
      />
      <div className="sidebar__search">
        <SearchURLContext.Provider value={{ searchUrl: "orders" }}>
          <SearchWidget />
        </SearchURLContext.Provider>
      </div>
      <div className="sidebar__menu">
        {items.map((item, index) => (
          <SideBarItem key={index + 1} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
