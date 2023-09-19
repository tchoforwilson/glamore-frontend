import React from "react";
import { Box } from "@mui/material";
import { StoreHeader, StoreScreenLayout, OrderTab } from "../../layouts";
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
    <StoreScreenLayout>
      <StoreHeader title="Orders" />
      <OrderTab />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "3rem",
          boxShadow: "0 0 0.5rem rgba(0,0,0, 0.4)",
          borderRadius: "1rem",
        }}
      >
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </Box>
    </StoreScreenLayout>
  );
};

export default OrdersScreen;
