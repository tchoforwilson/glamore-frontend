import React from "react";
import { CONST_ONEU } from "../../utilities/constants";

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
      {items.map((item, index) => (
        <option key={item._id || index + CONST_ONEU} value={item._id || item}>
          {item.name || item}
        </option>
      ))}
    </select>
  );
};

export default AppSelect;
