import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { AppSelect } from "../inputs";

/**
 * @breif Render a form select field
 * @param {String} name Form select name
 * @param {Array} items Form select items list
 * @returns
 */
const FormSelect = ({ name, items, isBordered = false }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form-select">
      <AppSelect
        name={name}
        items={items}
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className={`form-select__input ${
          isBordered ? "form-select__input--bordered" : ""
        }`}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormSelect;
