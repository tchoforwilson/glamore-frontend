import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ErrorScreen } from "../../layouts";
import { FormContainer, FormField } from "../../components/forms";
import { BackButton, SubmitButton } from "../../components/buttons";
import { login } from "../../store/auth";
import { ErrorContext } from "../../contexts";
import { eErrorTypes } from "../../utilities/enums";

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Enter valid email')
		.required('Email is required')
		.label('Email'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be atleast 8 characters')
		.label('Password'),
});

const LoginScreen = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const { loading, isAuthenticated, user } = useSelector((state) => state.auth);

  const [errorType, setErrorType] = useState(eErrorTypes.NOTHING);
  const ErrorValue = useMemo(() => ({ errorType, setErrorType }), [errorType]);

  const handlesubmit = (values) => {
    dispatch(login(values));
  };

	useEffect(() => {
		if (isAuthenticated && user) navigate(from, { replace: true });
	}, [navigate, from, user, isAuthenticated]);

  return (
    <ErrorContext.Provider value={ErrorValue}>
      <ErrorScreen>
        <div className="container-fluid mt-4">
          <div className="login__container">
            <div className="login__space"></div>
            <div className="login__form">
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
                  <div className="d-flex justify-content--center align-items--center">
                    <SubmitButton title="Sign In" loading={loading} />
                  </div>
                </form>
              </FormContainer>
              <BackButton to="/" />
            </div>
            <div className="login__image-container">
              <img
                className="login__img"
                src={require("../../assets/images/hat-boy.webp")}
                alt="login"
              />
            </div>
          </div>
        </div>
      </ErrorScreen>
    </ErrorContext.Provider>
  );
};

export default LoginScreen;
