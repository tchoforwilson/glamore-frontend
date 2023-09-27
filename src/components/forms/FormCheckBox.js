import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { AppCheckBox } from "../inputs";

const FormCheckBox = ({ name, label }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div class="form__group form-check">
      <AppCheckBox
        name={name}
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className="form-check__input"
      />
      <label htmlFor={name} class="form-check__label">
        {label}
      </label>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormCheckBox;
