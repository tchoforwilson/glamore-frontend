import React from "react";

/**
 * @breif Render a checkbox
 * @param {String} name Check name
 * @param {Any} otherProps Other properties of checkbox
 * @returns {hmtl}
 */
const AppCheckBox = ({ name, id, ...otherProps }) => {
  return <input id={id ?? name} name={name} type="checkbox" {...otherProps} />;
};

export default AppCheckBox;
