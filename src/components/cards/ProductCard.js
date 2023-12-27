import React from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../../utilities/functions";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, ...otherProps }) => {
  const navigate = useNavigate();
  const handleClick = (id) => () =>
    navigate(navigate(`/product/${id}`, { replace: true }));
  return (
    <div className="" {...otherProps}>
      {/* The product image goes below */}
      <div className="relative w-full rounded-md shadow-sm shadow-gray-400/40 bg-orange-300 aspect-[13/16]">
        <img
          src={product.img}
          alt={product.name}
          className="size-full object-cover object-center"
        />

        <span className="absolute rounded-full top-[5%] left-[5%] px-4 py-2 bg-white text-black">
          New
        </span>
      </div>

      {/* the contents of the product goes below */}
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex justify-between gap-4 items-start">
          <h3 className="text-xl font-bold truncate">{product.name}</h3>
          <button className="bg-black text-white text-center font-black py-2 px-4 rounded-md">
            {product.currency} {product.price}
          </button>
        </div>

        <div className="flex gap-2">
          <span className="text-sm">Avg Rating: </span>
          <span className="text-sm">4.2</span>
        </div>

        <div className="flex gap-2 mt-4 justify-between items-center">
          <button className="rounded-full border border-gray-300 px-4 py-2">
            Add to cart
          </button>
          <span
            role="button"
            className="text-sm rounded-full border border-gray-300 p-4 shadow shadow-gray-400"
          >
            O
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
