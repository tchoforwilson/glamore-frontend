import React from "react";
import { useFormikContext } from "formik";
import { AppInput } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";

const FormField = ({ name, placeholder, type }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form__group">
      <AppInput
        type={type}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className="form__input"
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;
