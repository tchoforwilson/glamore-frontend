import React from "react";

/**
 * @brief Render an HTML input field
 * @param {String} name Input name
 * @param {String} type Input type
 * @param {Any} otherProps -> Other input properties
 * @returns {JSX}
 */
const AppInput = ({ name, type = "text", ...otherProps }) => {
  return <input id={name} name={name} type={type} {...otherProps} />;
};

export default AppInput;
