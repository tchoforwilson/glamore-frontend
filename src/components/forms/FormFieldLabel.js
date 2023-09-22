import React from "react";
import { useFormikContext } from "formik";
import { AppInput } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";

const FormFieldLabel = ({ label, name, placeholder, type = "text" }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form__group">
      <label htmlFor={name} className="form__label">
        {label}
      </label>
      <AppInput
        id={name}
        type={type}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className="form__input form__input--label"
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormFieldLabel;
