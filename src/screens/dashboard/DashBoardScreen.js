import React from "react";
import { Box, Stack } from "@mui/material";
import { StoreScreenLayout } from "../../layouts";
import { AppSelect } from "../../components/inputs";
import DashBoardHeaderItem from "./DashBoardHeaderItem";
import ProductItem from "./ProductItem";
import orderedImage from "../../assets/images/most-ordered.jpg";

const DashBoardScreen = () => {
  return (
    <StoreScreenLayout title="dashboard">
      <Box className="store-content">
        <div className="w-100 d-flex justify-content--end my-2">
          <AppSelect
            name="date"
            items={[{ id: "-1", name: "Last 7days" }]}
            style={{ fontSize: "1.6rem", fontWeight: "600" }}
          />
        </div>
        <div className="dashboard-header">
          <DashBoardHeaderItem
            title="visits"
            number={895}
            percentage={14.5}
            increase={false}
          />
          <div className="dashboard-header__separator"></div>
          <DashBoardHeaderItem
            title="orders"
            number={1252}
            percentage={6.2}
            increase={true}
          />
          <div className="dashboard-header__separator"></div>
          <DashBoardHeaderItem
            title="revenue"
            number={1364560}
            percentage={33}
            increase={true}
          />
          <div className="dashboard-header__separator"></div>
          <DashBoardHeaderItem
            title="special customers"
            number={34}
            percentage={50}
            increase={false}
          />
        </div>
        <h2 className="dashboard-header__secondary">product analysis</h2>
        <Box
          sx={{
            width: "100%",
            padding: "1.5rem",
            boxShadow: "0 0 0.5rem rgba(0,0,0, 0.4)",
            borderRadius: "1rem",
          }}
        >
          <Stack sx={{ width: "100%" }} direction="column">
            <Box>
              <h3 className="dashboard-header__tertiary">most ordered items</h3>
              <div className="dashboard-product-items">
                {Array.from({ length: 10 }).map((_, index) => (
                  <ProductItem
                    key={index}
                    image={orderedImage}
                    price={600}
                    description="Fish sticks salade barbique mod cot fish dry"
                  />
                ))}
              </div>
            </Box>
            <Box>
              <h3 className="dashboard-header__tertiary">
                least popular items
              </h3>
            </Box>
          </Stack>
        </Box>
      </Box>
    </StoreScreenLayout>
  );
};

export default DashBoardScreen;
