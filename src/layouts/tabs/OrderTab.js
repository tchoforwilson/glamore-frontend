import React, { useState } from "react";
import { SearchURLContext } from "../../contexts";
import { SearchWidget } from "../../components/searchwiget";

const items = ["new orders", "all orders", "important", "completed"];

const OrderTab = ({ onTabClick }) => {
  const [activeTab, sectActiveTab] = useState("new orders");
  const handleTabclick = (tab) => {
    sectActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="order-tab">
      <div className="order-tab__menu">
        {items.map((item) => (
          <span
            key={item}
            className={`order-tab__item ${activeTab === item ? "active" : ""}`}
            onClick={handleTabclick}
          >
            {item}
          </span>
        ))}
      </div>
      <SearchURLContext.Provider value={{ searchUrl: "orders" }}>
        <SearchWidget placeholder="Search all orders" />
      </SearchURLContext.Provider>
    </div>
  );
};

export default OrderTab;