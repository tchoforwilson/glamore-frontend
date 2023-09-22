import React from "react";
import { Stack, Box } from "@mui/material";
import { SideBar } from "../sidebar";

/**
 * @breif This is the layout nature of user store screen.
 * Sidebar on the left, header on top and content below.
 * @param {HTML} children Children elements
 * @returns {JSX}
 */
const StoreScreenLayout = ({ children }) => {
  return (
    <Stack sx={{ height: "100vh" }} direction="row" spacing={1}>
      <Box sx={{ width: "20%", height: "100vh" }}>
        <SideBar />
      </Box>
      <Box sx={{ width: "80%", height: "100vh", padding: "2rem" }}>
        {children}
      </Box>
    </Stack>
  );
};

export default StoreScreenLayout;
