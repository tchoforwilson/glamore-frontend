import React from "react";

/**
 *
 * @param {String} size [xs, sm, ms, md, lg, xlg, xxlg]
 * @param {String} color [primary, secondary, tertiary, white, dark]
 * @returns {Component}
 */
const Spinner = ({ size, color }) => {
  return <div className={`spinner spinner--${size} spinner--${color}`}></div>;
};

export default Spinner;
