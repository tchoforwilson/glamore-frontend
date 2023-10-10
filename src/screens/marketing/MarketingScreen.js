import React from "react";
import { Box } from "@mui/material";
import { StoreScreenLayout } from "../../layouts";
import { UpgradeButton } from "../../components/buttons";

const MarketingScreen = () => {
  return (
    <StoreScreenLayout title="Marketing & Promotion">
      <Box className="store-content">
        <div className="marketing">
          <div className="plan plan-standard">
            <p>Standard Marketing Plan</p>
            <div className="plan__bill">2500/month</div>
            <div className="plan__line"></div>
            <p>List up to 100 fashion items</p>
            <p>Priority search Placement</p>
            <p>Featured Store Placement</p>
            <p>Dedicated Customer Support</p>
            <UpgradeButton />
          </div>
          <div className="plan plan-premuim">
            <p>Premuim Marketing Plan</p>
            <div className="plan__bill">5000/month</div>
            <div className="plan__line"></div>
            <p>Unlimited Listings</p>
            <p>Priority Search Placement</p>
            <p>Featured Store Placement</p>
            <p>Dedicated Customer Support</p>
            <p>Sponsored Content</p>
            <p>Email Marketing Campaigns</p>
            <p>Advanced Performance Analytics</p>
            <p>Priority Listing in Trending Products</p>
            <UpgradeButton />
          </div>
        </div>
      </Box>
    </StoreScreenLayout>
  );
};

export default MarketingScreen;
