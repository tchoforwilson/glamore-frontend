import React from "react";

/**
 * @breif Render a simple application button
 * @param {String} title Button title
 * @param {Function} onButtonClick Function to handle button click
 * @param {Any} otherProps Any other properties
 * @returns {JSX}
 */
const AppButton = ({ title, onButtonClick, ...otherProps }) => {
  return (
    <button onClick={onButtonClick} {...otherProps}>
      {title}
    </button>
  );
};

export default AppButton;
