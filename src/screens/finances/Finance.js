import React from "react";
import PropTypes from "prop-types";

/**
 * @breif Display a single finance report item
 * @param {String} title Title of the finance report item.
 * @param {Number} figure Number of quantity of the finance report item.
 * @param {String} description Description of the finance report item.
 * @param {HTML} children HTML element
 * @returns {JSX}
 */
const Finance = ({ title, figure, description, children, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <span className="finance__title">{title}</span>
      <h2 className="finance__figure">
        {figure} {description && <span className="ms-1">{description}</span>}
      </h2>
      {children}
    </div>
  );
};

Finance.propTypes = {
  title: PropTypes.string.isRequired,
  figure: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.element,
};

export default Finance;
