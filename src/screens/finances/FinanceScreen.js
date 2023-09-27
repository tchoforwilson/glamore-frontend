import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { StoreHeader, StoreScreenLayout } from "../../layouts";
import FinanceItem from "./FinanceItem";
import { numberFormatter } from "../../utilities/functions";

const FinanceScreen = () => {
  return (
    <StoreScreenLayout>
      <StoreHeader title="Finances & Overview" />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <Link to="finace-report" className="finance-report">
          download finance report
        </Link>
        <Grid container spacing={3}>
          <Grid item md={4} sm={12}>
            <FinanceItem title="Discount sales" figure={52} description="FCFA">
              <Link to="/cash-out" className="finance__button">
                cashout
              </Link>
            </FinanceItem>
            <FinanceItem
              title="Discount sales"
              figure={52}
              description="Items"
            />
            <div className="d-flex justify-content--between">
              <FinanceItem title="Positive reviews" figure={163} />
              <FinanceItem title="Negative reviews" figure={4} />
            </div>
          </Grid>
          <Grid item md={4} sm={12}>
            <FinanceItem
              title="Average customer order amount"
              figure="10,600"
              description="FCFA"
            />
            <FinanceItem
              title="Average recurring customers"
              figure={251}
              description="People"
            />
            <FinanceItem title="New customers" figure={250}>
              <p>
                Since January 31<sub>st</sub> 2023
              </p>
            </FinanceItem>
          </Grid>
          <Grid item md={4} sm={12}>
            <div className="h-100 d-flex flex-column justify-content--between">
              <div className="fees commission">
                <p className="fees__title">Commission fees</p>
                <h2 className="fees__percentage">15%</h2>
                <div className="fees__amount">
                  {numberFormatter.format(112185.5)}
                  <span className="fees__currency">FCFA</span>
                </div>
              </div>
              <div className="fees advertisement">
                <p className="fees__title">Advertisement fees</p>
                <div className="fees__amount">
                  {numberFormatter.format(112, 185.5)}
                  <span className="fees__currency">FCFA</span>
                </div>
                <p className="fees__text">
                  {numberFormatter.format(6520)} advertized products since June
                  16th 2023
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <div className="account-overview">
            <h2>Account overview</h2>
            <p>
              Your account has reached 20% more people in the last 24 hours,
              also, 16 of your products have been saved by customers. Overal
              your store has grown by 30% in the last 8 days. Congratulations!
            </p>
          </div>
        </Grid>
      </Box>
    </StoreScreenLayout>
  );
};

export default FinanceScreen;
