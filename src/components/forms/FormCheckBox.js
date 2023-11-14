import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { AppCheckBox } from "../inputs";

const FormCheckBox = ({ name, label, checked }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form-check">
      <AppCheckBox
        name={name}
        checked={checked ?? values[name]}
        onChange={(e) => setFieldValue(name, e.target.checked)}
        onBlur={() => setFieldTouched(name)}
        className="form-check__input"
      />
      <label htmlFor={name} className="form-check__label">
        {label}
      </label>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormCheckBox;
