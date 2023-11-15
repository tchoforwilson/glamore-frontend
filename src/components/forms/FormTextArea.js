import React from "react";
import { useFormikContext } from "formik";
import { AppTextArea } from "../inputs";
import FormErrorMessage from "./FormErrorMessage";

/**
 * @breif Render a form text area
 * @param {String} name Form field name
 * @param {String} placeholder Form field placeholder
 * @param {Boolean} isBodered Form field is bordered
 * @returns {HTML} div
 */
const FormTextArea = ({ name, placeholder, isBordered = false, style }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form__group" style={style}>
      <AppTextArea
        id={name}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className={`form__textarea ${
          isBordered ? "form__textarea--bordered" : ""
        }`}
        style={{ height: "100%", width: "100%" }}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormTextArea;
