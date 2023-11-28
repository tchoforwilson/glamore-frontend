import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { StoreScreenLayout } from "../../layouts";
import FinanceItem from "./FinanceItem";
import { numberFormatter } from "../../utilities/functions";

const FinanceScreen = () => {
  return (
    <StoreScreenLayout title="Finances & Overview">
      <Box className="store-content">
        <Link to="finace-report" className="finance-report">
          download finance report
        </Link>
        <Grid container spacing={3}>
          <Grid item md={4} sm={12}>
            <FinanceItem
              title="Discount sales"
              figure={numberFormatter.format(52)}
              description="FCFA"
            >
              <Link to="/cash-out" className="finance-item__button">
                cashout
              </Link>
            </FinanceItem>
            <FinanceItem
              title="Discount sales"
              figure={numberFormatter.format(52)}
              description="Items"
            />

            <Grid container spacing={2}>
              <Grid item sx={6}>
                <FinanceItem
                  title="Positive reviews"
                  figure={numberFormatter.format(163)}
                />
              </Grid>
              <Grid item sx={6}>
                <FinanceItem
                  title="Negative reviews"
                  figure={numberFormatter.format(4)}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={12}>
            <FinanceItem
              title="Average customer order amount"
              figure={numberFormatter.format(10600)}
              description="FCFA"
            />
            <FinanceItem
              title="Average recurring customers"
              figure={numberFormatter.format(251)}
              description="People"
            />
            <FinanceItem
              title="New customers"
              figure={numberFormatter.format(250)}
            >
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
