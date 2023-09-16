import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../../layouts/header";
import SideBar from "../../layouts/sidebar";
import { OrderTab } from "../../layouts/tab";
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
    <Stack sx={{ height: "100vh" }} direction="row" spacing={5}>
      <Box sx={{ width: "20%", height: "100vh" }}>
        <SideBar />
      </Box>
      <Box sx={{ width: "80%", height: "100vh", padding: "2rem" }}>
        <Header title="Orders" />
        <OrderTab />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "3rem",
            boxShadow: "0 0 0.3rem rgba(0,0,0, 0.19)",
            borderRadius: "1rem",
          }}
        >
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default OrdersScreen;
