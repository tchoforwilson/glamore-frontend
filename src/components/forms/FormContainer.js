import React from "react";
import { Formik } from "formik";

/**
 * @breif Render a formik form container
 * @param {Any} initialValues Form initial values
 * @param {Schema} validationSchema Validation schema for form
 * @param {Function} onSubmit Function to handle form submit
 * @param {HTML} childrem Form children elements
 * @param {Any} otherProps Other properties of formik
 * @returns {JSX}
 */
const FormContainer = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default FormContainer;
