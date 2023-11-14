import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { AppSelect } from "../inputs";

/**
 * @breif Render a form select field
 * @param {String} name Form select name
 * @param {Array} items Form select items list
 * @param {Boolean} multiple Form select multiple items
 * @param {Boolean} isBordered Form with borders
 * @returns
 */
const FormSelect = ({ name, items, multiple = false, isBordered = false, style }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
  return (
    <div className="form-select" style={{ ...style }}>
      <AppSelect
        name={name}
        items={items}
        multiple={multiple}
        value={values[name]}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={() => setFieldTouched(name)}
        className={`form-select__input ${
          isBordered ? "form-select__input--bordered" : ""
        }`}
        style={{ width: '100%' }}
      />
      <FormErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
};

export default FormSelect;
