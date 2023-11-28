import React, { useState } from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { AppCheckBox } from "../inputs";

const FormCheckBox = ({ name, label, value }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();
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
    <div className="form-check">
      <AppCheckBox
        name={name}
        checked={dataValues.includes(value)}
        onChange={handleChange}
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
