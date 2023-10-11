import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import * as Yup from "yup";
import { StoreScreenLayout } from "../../layouts";
import { FormContainer, FormFieldLabel } from "../../components/forms";
import { SubmitButton } from "../../components/buttons";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Store name required").label("Store name"),
  email: Yup.string()
    .email("Enter valid email")
    .required("Email is required")
    .label("Email"),
  location: Yup.string().required("Store location required").label("Location"),
  phone: Yup.string().required("Store phone required").label("Phone Address"),
});

const StoreSettingScreen = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <StoreScreenLayout title="Store settings">
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          padding: "2rem",
        }}
      >
        <Container>
          <div className="h-100 w-100 d-flex flex-column align-items--center justify-content--center">
            <section className="section-setting-image">
              <Grid container sx={{ justifyContent: "center" }}>
                <Grid item md={8}>
                  <div
                    className="setting-background-image"
                    style={{
                      backgroundImage: `url(${require("./background.png")})`,
                    }}
                  >
                    <img
                      className="setting-store-logo"
                      src={require(`../../assets/images/profile.png`)}
                      alt="Store Logo"
                    />
                  </div>
                </Grid>
              </Grid>
            </section>
            <section className="section-setting-form">
              <FormContainer
                initialValues={{
                  name: "Patricia's Fashion Store",
                  email: "patricia.store@gmail.com",
                  location: "rue 55n.2 stree 08 bonapriso",
                  phone: "69821300364",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Grid container spacing={6} sx={{ marginBottom: "2.5rem" }}>
                  <Grid item md={6} sm={12}>
                    <FormFieldLabel
                      label="Store name"
                      name="name"
                      placeholder="Store name"
                    />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormFieldLabel
                      label="Email"
                      name="email"
                      placeholder="Email address"
                      type="email"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={6} sx={{ marginBottom: "2.5rem" }}>
                  <Grid item md={6} sm={12}>
                    <FormFieldLabel
                      label="Location"
                      name="location"
                      placeholder="Store location"
                    />
                  </Grid>
                  <Grid item md={6} sm={12}>
                    <FormFieldLabel
                      label="Phone Address"
                      name="phone"
                      placeholder="Phone address"
                      type="tel"
                    />
                  </Grid>
                </Grid>
                <Grid container>
                  <div className="mx-auto">
                    <SubmitButton title="save" />
                  </div>
                </Grid>
              </FormContainer>
            </section>
            <section className="section-setting-links">
              <Link to="billing-info" className="btn btn--white setting-button">
                Billing info
              </Link>
              <Link
                to="account"
                className="btn btn--white d-flex align-items--center setting-button"
              >
                <span>Account settings</span>
                <ChevronRightOutlinedIcon
                  sx={{ fontSize: "3rem", marginLeft: "1rem" }}
                />
              </Link>
            </section>
          </div>
        </Container>
      </Box>
    </StoreScreenLayout>
  );
};

export default StoreSettingScreen;
