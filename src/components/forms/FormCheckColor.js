import React, { useState } from "react";
import { useFormikContext } from "formik";
import { AppCheckBox } from "../inputs";

const FormCheckColor = ({ name, label, value }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();
  const [dataValues, setDataValues] = useState(values[name]);

  const handleChange = () => {
    if (dataValues.includes(value)) {
      const index = dataValues.indexOf(value);
      setDataValues([...dataValues.splice(index - 1, index)]);
    } else {
      dataValues.push(value);
      setDataValues([...dataValues, value]);
    }
    setFieldValue(name, dataValues);
  };

  return (
    <div className="form-check-color__container">
      <AppCheckBox
        name={name}
        checked={dataValues.includes(value)}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
        className="form-check-color__input"
        style={{ appearance: "none", backgroundColor: value }}
      />
      <label htmlFor={name} className="form-check-color__label">
        {label}
      </label>
    </div>
  );
};

export default FormCheckColor;
