import { Grid, Box } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { FormContainer, FormField } from "../../components/forms";
import { BackButton, SubmitButton } from "../../components/buttons";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name required").label("First Name"),
  lastname: Yup.string().required("Last Name required").label("Last Name"),
  email: Yup.string()
    .email("Enter valid email")
    .required("Email is required")
    .label("Email"),
  phonenumber: Yup.number()
    .required("Phone number required")
    .label("Phone number"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters")
    .label("Password"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), "null"], "Passwords dont't match")
    .required("Please confirm password")
    .label("Confirm password"),
});
const SignUpScreen = () => {
  const handlesubmit = (values) => {
    console.log("Submitted", values);
  };
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item md={1}>
          <div style={{ width: "100%" }}></div>
        </Grid>
        <Grid item md={6}>
          <h1 className="heading-primary">
            Create your glamore{" "}
            <span className="heading-primary__newline">account.</span>
          </h1>
          <FormContainer
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phonenumber: "",
              password: "",
              passwordConfirm: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handlesubmit}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormField name="firstname" placeholder="First name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField name="lastname" placeholder="Last name" />
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormField name="email" placeholder="E-mail" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField name="phonenumber" placeholder="Phone number" />
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <FormField
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField
                  name="passwordConfirm"
                  placeholder="Confirm password"
                  type="password"
                />
              </Grid>
            </Grid>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SubmitButton title="Sign Up" />
            </Box>
          </FormContainer>
          <BackButton to="/" />
        </Grid>
        <Grid item md={5}>
          <Box sx={{ height: "100vh" }}>
            <img
              src={require("../../assets/images/hat-boy.png")}
              alt="Hat Boy"
              style={{
                height: "100vh",
                backgroundPosition: "center",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpScreen;
