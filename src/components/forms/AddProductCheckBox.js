import React from "react";
import { useFormikContext } from "formik";
import { AppCheckBox } from "../inputs";

const AddProductCheckBox = ({ name, label }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  return (
    <div className="add-product-checkbox">
      <AppCheckBox
        name={name}
        checked={values[name]}
        value={values[name]}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
        onBlur={() => setFieldTouched(name)}
        className="add-product-checkbox__input"
      />
      <label htmlFor={name} className="add-product-checkbox__label">
        {label}
      </label>
    </div>
  );
};

export default AddProductCheckBox;
