import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Grid, Box, Stack } from "@mui/material";
import { FormContainer, FormField } from "../../components/forms";
import { BackButton, SubmitButton } from "../../components/buttons";
import { signup } from "../../store/auth";

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
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const handlesubmit = (values) => {
    dispatch(signup(values));
  };
  return (
    <Box className="screen-signup">
      <Grid container spacing={0}>
        <Grid item md={1}></Grid>
        <Grid item md={6}>
          <h1 className="heading-primary">
            Create your glamore
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
            <Stack direction="row" spacing={5}>
              <FormField name="firstname" placeholder="First name" />
              <FormField name="lastname" placeholder="Last name" />
            </Stack>
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
              <SubmitButton title="Sign Up" loading={loading} />
            </Box>
          </FormContainer>
          <BackButton to="/" />
        </Grid>
        <Grid item md={5}>
          <img
            src={require("../../assets/images/hat-boy.webp")}
            alt="Hat Boy"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpScreen;
