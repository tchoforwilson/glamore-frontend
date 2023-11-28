import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

/**
 * @breif Render an add to bag button
 * @param {Function} onClick Handler when button is clicked
 * @returns {JSX}
 */
const AddToBagButton = ({ onClick }) => {
  const handleClick = () => onClick;
  return (
    <button className="btn btn-bag" onClick={handleClick}>
      <span className="btn-bag__text">add to bag</span>
      <ShoppingBasketIcon className="btn-bag__icon" />
    </button>
  );
};

export default AddToBagButton;
