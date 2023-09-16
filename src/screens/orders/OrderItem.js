import React from "react";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-item__info">
        <div className="order-item__status"></div>
        <span>{order.user.email}</span>
        <span>{order.quantity} items</span>
      </div>
      <div className="order-item__total">
        <span>Total:</span>
        <span>{order.amount}</span>
        <span>{order.currency}</span>
      </div>
      <div className="order-item__time">
        <span>{order.time}</span>
        <span>ago</span>
      </div>
      <div className="order-item__code">{order.code}</div>
      <button type="button" className="order-item__button">
        fetch for sale
      </button>
    </div>
  );
};

export default OrderItem;
