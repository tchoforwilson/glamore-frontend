import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchURLContext } from "../../contexts";
import { SearchWidget } from "../../components/searchwiget";

const items = [
  { title: "new orders", to: "/new-orders" },
  { title: "all orders", to: "/all-orders" },
  { title: "important", to: "/important" },
  { title: "completed", to: "/completed" },
];

const OrderTab = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="order-tab">
      <div className="order-tab__menu">
        {items.map((item, index) => (
          <Link
            className={`order-tab__item ${
              pathname === item.to ? "active" : ""
            }`}
            to={item.to}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <SearchURLContext.Provider value={{ searchUrl: "orders" }}>
        <SearchWidget placeholder="Search all orders" />
      </SearchURLContext.Provider>
    </div>
  );
};

export default OrderTab;
