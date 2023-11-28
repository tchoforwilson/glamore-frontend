import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import _ from "lodash";
import FormErrorMessage from "./FormErrorMessage";
import { AppSelect } from "../inputs";
import { CONST_ZEROU } from "../../utilities/constants";

/**
 * @breif Render a form select field
 * @param {String} name Form select name
 * @param {Array} items Form select items list
 * @param {Boolean} multiple Form select multiple items
 * @param {Boolean} isBordered Form with borders
 * @returns
 */
const FormSelect = ({ name, items, multiple = false, isBordered = false }) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const [defaultValue, setDefaultValue] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
    setDefaultValue(value);
  };

  useEffect(() => {
    if (items.lenght > CONST_ZEROU) {
      if (!_.get(values, name)) {
        setDefaultValue(items[CONST_ZEROU]);
        setFieldValue(name, items[CONST_ZEROU]);
      } else {
        setDefaultValue(_.get(values, name));
        setFieldValue(name, _.get(values, name));
      }
    }
  }, [name, values, items, setFieldValue]);
  return (
    <div className="form-select">
      <AppSelect
        name={name}
        items={items}
        multiple={multiple}
        value={defaultValue}
        onChange={(e) => handleChange(e)}
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
