import React from "react";
import { currencyFormatter } from "../../utilities/functions";

const ProductCard = ({ product, ...otherProps }) => {
  return (
    <figure className="card product-card" {...otherProps}>
      <img
        src={require("../../assets/images/list.jpg")}
        alt={product.name}
        className="product-card__image"
      />
      <figcaption>
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">
          {currencyFormatter(product.currency, product.price)}
        </p>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
