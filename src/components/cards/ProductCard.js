import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../../utilities/functions";

const ProductCard = ({ product, ...otherProps }) => {
  const navigate = useNavigate();
  const handleClick = (id) => () =>
    navigate(navigate(`/product/${id}`, { replace: true }));
  return (
    <figure
      className="card product-card"
      {...otherProps}
      onClick={handleClick(product.id)}
    >
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
