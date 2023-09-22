import React from "react";

/**
 * @breif Display a single finance report item
 * @param {String} title Title of the finance report item.
 * @param {Number} figure Number of quantity of the finance report item.
 * @param {String} description Description of the finance report item.
 * @param {HTML} children HTML element
 * @returns {JSX}
 */
const FinanceItem = ({ title, figure, description, children }) => {
  return (
    <div className="finance">
      <span className="finance__title">{title}</span>
      <h2 className="finance__figure">
        {figure} {description && <span className="ms-1">{description}</span>}
      </h2>
      {children && children}
    </div>
  );
};

export default FinanceItem;
