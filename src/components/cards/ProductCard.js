import React from "react";

const ProductCard = ({ product, ...otherProps }) => {
  return (
    <figure className="card product-card">
      <img
        src={require("../../assets/images/t-shirt.jpg")}
        alt={product.name}
        className="product-card__image"
      />
      <figcaption>
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">
          <span>{product.currency}</span>
          <span>{product.price}</span>
        </p>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
