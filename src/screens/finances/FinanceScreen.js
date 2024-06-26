import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { StoreScreenLayout } from "../../layouts";
import Finance from "./Finance";
import Fees from "./Fees";
import { numberFormatter } from "../../utilities/functions";

const FinanceScreen = () => {
  return (
    <StoreScreenLayout title="Finances & Overview">
      <Link to="finace-report" className="finance-report">
        download finance report
      </Link>
      <div className="store-content finance-content">
        <Finance
          title="Discount sales"
          figure={numberFormatter.format(52)}
          description="FCFA"
          className="finance finance--1"
        >
          <Link to="/cash-out" className="finance__button">
            cashout
          </Link>
        </Finance>
        <Finance
          title="Average customer order amount"
          figure={numberFormatter.format(10600)}
          description="FCFA"
          className="finance finance--2"
        />
        <Fees
          title="Commission fees"
          amount={112185.5}
          percentage={15}
          className="fees commission"
        />
        <Finance
          title="Discount sales"
          figure={numberFormatter.format(52)}
          description="Items"
          className="finance finance--3"
        />
        <Finance
          title="Average recurring customers"
          figure={numberFormatter.format(251)}
          description="People"
          className="finance finance--4"
        />
        <Finance
          title="Positive reviews"
          figure={numberFormatter.format(163)}
          className="finance finance--5"
        />
        <Finance
          title="New customers"
          figure={numberFormatter.format(250)}
          className="finance finance--7"
        />
        <Finance
          title="Negative reviews"
          figure={numberFormatter.format(4)}
          className="finance finance--8"
        />
        <Fees
          title="Advertisement fees"
          amount={112185.5}
          quantity={6520}
          description="advertized products since June 16th 2023"
          className="fees advertisement"
        />
        <div className="account-overview">
          <h2>Account overview</h2>
          <p>
            Your account has reached 20% more people in the last 24 hours, also,
            16 of your products have been saved by customers. Overal your store
            has grown by 30% in the last 8 days. Congratulations!
          </p>
        </div>
      </div>
    </StoreScreenLayout>
  );
};

export default FinanceScreen;
