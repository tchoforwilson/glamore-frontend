import React from "react";

/**
 * @breif Render a text area input field
 * @param {String} name -> Text area input name
 * @param {String} placeholder Text area placeholder
 * @param {Any} otherProps -> Other text area properties
 * @returns {JSX}
 */
const AppTextArea = ({ name, placeholder, ...otherProps }) => {
  return (
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      {...otherProps}
    ></textarea>
  );
};

export default AppTextArea;
