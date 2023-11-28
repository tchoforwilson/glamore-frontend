import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FormContainer, FormField } from '../../components/forms';
import { BackButton, SubmitButton } from '../../components/buttons';
import { signup } from '../../store/auth';

const validationSchema = Yup.object().shape({
	firstname: Yup.string().required('First Name required').label('First Name'),
	lastname: Yup.string().required('Last Name required').label('Last Name'),
	email: Yup.string()
		.email('Enter valid email')
		.required('Email is required')
		.label('Email'),
	phonenumber: Yup.number()
		.required('Phone number required')
		.label('Phone number'),
	password: Yup.string()
		.required('Password is required')
		.min(8, 'Password must be atleast 8 characters')
		.label('Password'),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password'), 'null'], "Passwords dont't match")
		.required('Please confirm password')
		.label('Confirm password'),
});

const SignUpScreen = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const from = location.state?.from?.pathname || '/';

	const { loading, isAuthenticated, user } = useSelector((state) => state.auth);

	const handlesubmit = (values) => {
		console.log(values);
		dispatch(signup(values));
	};

	useEffect(() => {
		if (isAuthenticated && user) navigate(from, { replace: true });
	}, [navigate, from, user, isAuthenticated]);

	return (
		<div className="container-fluid mt-4">
			<div className="signup__container">
				<div className="signup__image-container">
					<img
						src={require('../../assets/images/hat-boy.webp')}
						alt="Hat Boy"
						className="signup__img"
					/>
				</div>
				<div className="signup__space"></div>

				<div className="signup__form">
					<h1 className="heading-primary">
						Create your glamore
						<span className="heading-primary__newline">account.</span>
					</h1>
					<FormContainer
						initialValues={{
							firstname: '',
							lastname: '',
							email: '',
							phonenumber: '',
							password: '',
							passwordConfirm: '',
						}}
						validationSchema={validationSchema}
						onSubmit={handlesubmit}
					>
						<div className="signup-form">
							<div className="signup-form__row">
								<FormField name="firstname" placeholder="First name" />
								<FormField name="lastname" placeholder="Last name" />
							</div>
						</div>
						<div className="signup-form__row">
							<FormField name="email" placeholder="E-mail" />
							<FormField name="phonenumber" placeholder="Phone number" />
						</div>
						<div className="signup-form__row">
							<FormField
								name="password"
								placeholder="Password"
								type="password"
							/>
							<FormField
								name="passwordConfirm"
								placeholder="Confirm password"
								type="password"
							/>
						</div>
						<div className="d-flex justify-content--center align-items--center">
							<SubmitButton title="Sign Up" loading={loading} />
						</div>
					</FormContainer>
					<BackButton to="/" />
				</div>
			</div>
		</div>
	);
};

export default SignUpScreen;
