import React, { useState, useMemo } from "react";
import { Stack, Box } from "@mui/material";
import { SideBar } from "../sidebar";
import { StoreHeader } from "../header";
import { SideBarContext } from "../../contexts";

/**
 * @breif This is the layout nature of user store screen.
 * Sidebar on the left, header on top and content below.
 * @param {HTML} children Children elements
 * @returns {JSX}
 */
const StoreScreenLayout = ({ title, children }) => {
  const [isOpen, toggleSideBar] = useState(false);
  const sideBarValue = useMemo(() => ({ isOpen, toggleSideBar }), [isOpen]);

  return (
    <Stack sx={{ height: "100vh" }} direction="row" spacing={1}>
      <SideBarContext.Provider value={sideBarValue}>
        <Box
          sx={{ width: "20%", height: "100vh" }}
          className={`sidebar-box ${isOpen ? "active" : ""}`}
        >
          <SideBar />
        </Box>
        <Box className="store-main">
          <StoreHeader title={title} />
          {children}
        </Box>
      </SideBarContext.Provider>
    </Stack>
  );
};

export default StoreScreenLayout;
