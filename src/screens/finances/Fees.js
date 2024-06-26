import React from "react";
import PropTypes from "prop-types";
import { numberFormatter } from "../../utilities/functions";

const Fees = ({
  title,
  amount,
  percentage,
  quantity,
  description,
  ...otherProps
}) => {
  return (
    <div {...otherProps}>
      <p className="fees__title">{title}</p>
      {percentage && <h2 className="fees__percentage">{`${percentage}%`}</h2>}
      <div className="fees__amount">
        {numberFormatter.format(amount)}
        <span className="fees__currency">FCFA</span>
      </div>
      {quantity && (
        <p className="fees__text">
          {numberFormatter.format(quantity)} {description}
        </p>
      )}
    </div>
  );
};

Fees.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  description: PropTypes.string,
};

export default Fees;
