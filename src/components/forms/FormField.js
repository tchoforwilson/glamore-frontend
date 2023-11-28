import React from "react";
import { useFormikContext } from "formik";
import { AppInput } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";

/**
 * @breif Render a form field with border bottom only and field
 * @param {String} name Form field name
 * @param {String} placeholder Form field placeholder
 * @param {String} type Form field type
 * @param {Boolean} isBodered Form field is bordered
 * @returns {HTML} div
 */
const FormField = ({ name, placeholder, type, isBordered = false }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form__group">
      <AppInput
        id={name}
        type={type}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className={`form__input ${isBordered ? "form__input--bordered" : ""}`}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormField;
