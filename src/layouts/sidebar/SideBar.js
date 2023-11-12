import React, { useMemo } from "react";
import { SearchWidget } from "../../components/searchwiget";
import { SearchURLContext } from "../../contexts";
import SideBarItem from "./SideBarItem";
import financesIcon from "../../assets/icons/chart-mixed-svgrepo-com.svg";
import listingsIcon from "../../assets/icons/Group 191.svg";
import ordersIcon from "../../assets/icons/memo-svgrepo-com.svg";
import marketingIcon from "../../assets/icons/marketing-svgrepo-com.svg";
import dashboardIcon from "../../assets/icons/course-tile-sort-svgrepo-com.svg";
import settingIcon from "../../assets/icons/Icon feather-settings.svg";

const items = [
  { title: "dashboard", to: "/dashboard", icon: dashboardIcon },
  { title: "listings", to: "/listings", icon: listingsIcon },
  { title: "orders", to: "/orders", icon: ordersIcon },
  { title: "finances", to: "/finances", icon: financesIcon },
  { title: "marketing", to: "/marketing", icon: marketingIcon },
  { title: "settings", to: "/settings", icon: settingIcon },
];

const SideBar = () => {
  const searchURL = useMemo(() => ({ searchUrl: "orders" }), []);
  return (
    <div className="sidebar">
      <img
        src={require("../../assets/logos/glamore-logo.png")}
        alt="Glamore  Logo"
        className="sidebar__logo"
      />
      <div className="sidebar__search">
        <SearchURLContext.Provider value={searchURL}>
          <SearchWidget />
        </SearchURLContext.Provider>
      </div>
      <div className="sidebar__menu">
        {items.map((item, index) => (
          <SideBarItem
            key={index + 1}
            title={item.title}
            to={item.to}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
