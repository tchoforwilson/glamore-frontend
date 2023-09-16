import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "../../layouts/header";
import SideBar from "../../layouts/sidebar";
import { OrderTab } from "../../layouts/tab";

const OrdersScreen = () => {
  return (
    <Stack sx={{ height: "100vh" }} direction="row" spacing={5}>
      <Box sx={{ width: "20%", height: "100vh" }}>
        <SideBar />
      </Box>
      <Box sx={{ width: "80%", height: "100vh", padding: "2rem" }}>
        <Header title="Orders" />
        <OrderTab />
      </Box>
    </Stack>
  );
};

export default OrdersScreen;
