import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box } from "@mui/material";
import * as Yup from "yup";
import { FormContainer, FormField } from "../../components/forms";
import { BackButton, SubmitButton } from "../../components/buttons";
import { login } from "../../store/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters")
    .label("Password"),
});

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const handlesubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item md={1}></Grid>
        <Grid item md={5} sm={12}>
          <h1 className="heading-primary">
            Welcome <span className="heading-primary__newline">back!</span>
          </h1>
          <FormContainer
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handlesubmit}
          >
            <form>
              <FormField name="email" placeholder="E-mail" type="email" />
              <FormField
                name="password"
                placeholder="Password"
                type="password"
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SubmitButton title="Sign In" loading={loading} />
              </Box>
            </form>
          </FormContainer>
          <BackButton to="/" />
        </Grid>
        <Grid item md={6} sm={1}>
          <Box sx={{ height: "100vh" }}>
            <img
              src={require("../../assets/images/hat-boy.webp")}
              alt="Hat Boy"
              style={{
                height: "100vh",
                width: "auto",
                backgroundPosition: "center",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
