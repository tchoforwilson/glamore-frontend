import React from "react";

const CardDropDownItem = ({ product }) => {
  return (
    <div className="cart-dropdown__item">
      <div className="cart-dropdown__body">
        <img alt={product.name} />
        <div className="cart-dropdown__content">
          <p className="card-dropdown__name">{product.name}</p>
          <div className="cart-dropdown__values">
            <span className="cart-dropdown__value">1</span>
          </div>
          <div className="cart-dropdown__price">
            <span className="cart-dropdown__price--normal"></span>
            {product.priceDiscount && (
              <span className="cart-dropdown__price--discount"></span>
            )}
          </div>
        </div>
      </div>
      <div className="cart-dropdown__size"></div>
    </div>
  );
};

export default CardDropDownItem;
