import React, { useState, useMemo } from "react";
import { Box } from "@mui/material";
import { StoreScreenLayout } from "../../layouts";
import { SearchWidget } from "../../components/searchwiget";
import { AppSelect } from "../../components/inputs";

import OrderItem from "./OrderItem";
import OrderCard from "./OrderCard";
import { SearchURLContext } from "../../contexts";

const headers = ["new orders", "all orders", "important", "completed"];
const sorts = ["sort by", ...headers];

const orders = [
  {
    _id: "ud99kjdkj",
    user: {
      email: "james@example.io",
    },
    quantity: 8,
    amount: 36650,
    currency: "XAF",
    time: 19,
    code: "#9848kdj083mejemdnm",
  },
  {
    _id: "ud9945dkj",
    user: {
      email: "bands@example.io",
    },
    quantity: 4,
    amount: 46030,
    currency: "XAF",
    time: 1,
    code: "#9848kdje53mejemdnm",
  },
  {
    _id: "ud99k34kj",
    user: {
      email: "mary@example.io",
    },
    quantity: 4,
    amount: 46030,
    currency: "XAF",
    time: 1,
    code: "#9848kdje53mejemdnm",
  },
];

const OrdersScreen = () => {
  const [activeHeader, sectActiveHeader] = useState("new orders");
  // Search path url
  const searchPath = useMemo(() => ({ searchUrl: "orders" }), []); // value is cached by useMemo

  const handleHeaderClick = (header) => () => {
    sectActiveHeader(header);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <StoreScreenLayout title="Orders">
      <Box className="store-content">
        <div className="order-header">
          <AppSelect
            name="sort"
            items={sorts}
            className="order-header__select"
            onChange={handleChange}
          />
          <div className="order-header__items">
            {headers.map((header) => (
              <span
                key={header}
                className={`order-header__item ${
                  activeHeader === header ? "active" : ""
                }`}
                onClick={handleHeaderClick(header)}
              >
                {header}
              </span>
            ))}
          </div>
          <SearchURLContext.Provider value={searchPath}>
            <SearchWidget placeholder="Search all orders" />
          </SearchURLContext.Provider>
        </div>
        <div className="order-list-items">
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
        <div className="order-card-items">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </Box>
    </StoreScreenLayout>
  );
};

export default OrdersScreen;
