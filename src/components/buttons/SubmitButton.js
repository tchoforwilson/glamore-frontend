import React from "react";
import { useFormikContext } from "formik";
import Spinner from "../common/spinner";

/**
 * @breif Render a submit button
 * @param {String} title Title of submit button
 * @param {Boolean} loading Loading property
 * @returns {JSX}
 */
const SubmitButton = ({ title, loading, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      type="submit"
      onClick={handleSubmit}
      disabled={loading}
      className="btn btn--secondary btn--submit"
      {...otherProps}
      style={{ cursor: "pointer" }}
    >
      {loading ? <Spinner size="xs" color="primary" /> : title}
    </button>
  );
};

export default SubmitButton;
