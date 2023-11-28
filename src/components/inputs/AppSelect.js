import React from "react";

/**
 * @brief Render an html select field
 * @param {String} name -> Name of select field
 * @param {Array} items -> Items to be rendered in select field
 * @param {Any} otherProps -> Other field properties
 * @returns {JSX}
 */
const AppSelect = ({ name, items = [], ...otherProps }) => {
  return (
    <select id={name} name={name} value={otherProps.value} {...otherProps}>
      {items.map((item) => (
        <option
          key={item?.id || item?.name || item}
          value={item?.id || item?.value || item}
        >
          {item?.name || item?.value || item}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
