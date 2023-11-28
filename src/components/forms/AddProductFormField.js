import React from "react";
import { useFormikContext } from "formik";
import { AppInput } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";

const AddProductFormField = ({ name, label, type }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="add-product-field__group">
      <div className="add-product-field__item">
        <label htmlFor={name} className="add-product-field__label">
          {label}
        </label>
        <AppInput
          id={name}
          type={type}
          name={name}
          value={values[name]}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={() => setFieldTouched(name)}
          className="add-product-field__input"
        />
      </div>
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default AddProductFormField;
