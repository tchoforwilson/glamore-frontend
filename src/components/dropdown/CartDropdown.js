import React from "react";

const CartDropdown = ({ active }) => {
  return (
    <div className={`dropdown cart-dropdown ${active ? "active" : ""}`}>
      <h1 className="cart-dropdown__title">My cart</h1>
      <span className="cart-dropdown__items">4 items</span>
    </div>
  );
};

export default CartDropdown;
