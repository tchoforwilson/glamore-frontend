import React from "react";
/**
 * @breif Dsiplay a form error message
 * @param {String} error -> Error message
 * @param {Boolean} visible -> Message visibility
 * @returns {JSX}
 */
const FormErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <span className="form__error">{error}</span>;
};

export default FormErrorMessage;
