import React from "react";
import { currencyFormatter } from "../../utilities/functions";

/**
 * @brief Order object
 * @param {Object} order
 * @returns
 */
const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <span className="order-card__status"></span>
      <div className="order-card__details">
        <p className="order-card__email">{order.user.email}</p>
        <p className="order-card__total">
          Total: {currencyFormatter(order.currency, order.amount)}
        </p>
        <p className="order-card__quantity">Quantity: {order.quantity}</p>
        <p className="order-card__time">{order.time} minutes ago</p>
        <span className="order-card__code">{order.code}</span>
        <button type="button" className="order-card__button">
          fetch for sale
        </button>
      </div>
      <div className="order-card__img">
        <img src={require("../../assets/images/t-shirt.jpg")} alt={order._id} />
      </div>
    </div>
  );
};

export default OrderCard;
