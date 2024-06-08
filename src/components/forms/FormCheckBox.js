import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { AppCheckBox } from "../inputs";

const FormCheckBox = ({ name, label, value, id }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const handleChange = () => {
    setFieldValue(
      name,
      values[name].includes(value)
        ? values[name].filter((item) => item !== value)
        : [...values[name], value]
    );
  };

  return (
    <div className="form-check">
      <AppCheckBox
        id={id ?? name}
        name={name}
        checked={values[name].includes(value)}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
        className="form-check__input"
      />
      <label htmlFor={id ?? name} className="form-check__label">
        {label}
      </label>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormCheckBox;
