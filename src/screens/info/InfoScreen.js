import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

const InfoScreen = () => {
  return (
    <React.Fragment>
      <nav className="nav nav--home">
        <Container>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link className="nav__link btn btn--white" to="/signup">
                Create account
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link btn btn--secondary" to="/login">
                Log in
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
      <main>
        <section className="section-unique">
          <Container>
            <div className="text--center mb--2">
              <h2 className="heading-secondary">
                find your own
                <span className="heading-secondary__newline">
                  Unique fashion style in cameroon
                </span>
              </h2>
              <ArrowCircleDownOutlinedIcon className="section-icon" />
            </div>
          </Container>
        </section>
        <section className="section-quality">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <img
                  src={require("../../assets/images/layer-1.webp")}
                  className="section-img"
                  alt="layer-1"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className="text--center mb--2">
                  <h2 className="heading-secondary">
                    select high quality fashion
                    <span className="heading-secondary__newline">
                      Products From
                    </span>
                    <span className="heading-secondary__newline">
                      Local Shop Accounts
                    </span>
                  </h2>
                  <ArrowCircleDownOutlinedIcon className="section-icon" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="section-items">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <img
                  className="section-img"
                  src={require("../../assets/images/layer-2.webp")}
                  alt="layer-2"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className="text--center mb--2">
                  <h2 className="heading-secondary">
                    save the items you like
                    <span className="heading-secondary__newline">
                      so you can purchase later
                    </span>
                  </h2>
                  <ArrowCircleDownOutlinedIcon className="section-icon" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="section-orders">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <img
                  className="section-img"
                  src={require("../../assets/images/layer-3.webp")}
                  alt="layer-3"
                />
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="text--center mb--2">
                  <h2 className="heading-secondary">
                    get notified when your orders
                    <span className="heading-secondary__newline">
                      are ready for delivery
                    </span>
                  </h2>
                  <ArrowCircleDownOutlinedIcon className="section-icon" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section className="section-us">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <div className="d-flex flex-column justify-content--start text--left">
                  <h1 className="heading-primary">
                    Find your
                    <span className="heading-primary__newline">
                      style with us
                    </span>
                  </h1>
                  <Link className="btn btn--secondary mb--2" to="/login">
                    Login
                  </Link>
                  <p className="or">or</p>
                  <Link className="btn btn--white mt--2" to="/signup">
                    Create account
                  </Link>
                  <div className="ms--4">
                    <ArrowCircleUpOutlinedIcon className="section-icon" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <img
                  className="section-img"
                  src={require("../../assets/images/hat-boy.png")}
                  alt="Hat boy"
                />
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </React.Fragment>
  );
};

export default InfoScreen;
