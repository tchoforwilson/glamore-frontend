import React from "react";
import { Box } from "@mui/material";
import { StoreScreenLayout, OrderTab } from "../../layouts";
import OrderItem from "./OrderItem";

const orders = [
  {
    _id: "ud99kjdkj",
    user: {
      email: "james@example.io",
    },
    quantity: 8,
    amount: 36650,
    currency: "FCFA",
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
    currency: "FCFA",
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
    currency: "FCFA",
    time: 1,
    code: "#9848kdje53mejemdnm",
  },
];

const OrdersScreen = () => {
  return (
    <StoreScreenLayout title="Orders">
      <Box className="store-content">
        <OrderTab />
        <div className="orders">
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
      </Box>
    </StoreScreenLayout>
  );
};

export default OrdersScreen;
