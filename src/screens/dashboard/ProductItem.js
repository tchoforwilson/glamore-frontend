import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import CampaignIcon from "@mui/icons-material/Campaign";
import { numberFormatter } from "../../utilities/functions";
/**
 *
 * @param {String} image Product item image
 * @param {Number} price Price of the product
 * @param {String} description Description of the product
 * @param {String} icon component icon type
 * @returns
 */
const ProductItem = ({ image, price, description, iconType }) => {
  return (
    <figure className="product-item">
      <img src={image} alt={description} />
      <figcaption className="product-item__details">
        <h4 className="product-item__price">
          {numberFormatter.format(price)} <span className="ms-1">FCFA</span>
        </h4>
        <p className="product-item__description">{description}</p>
      </figcaption>
      {iconType === "popular" ? (
        <SellIcon className="product-item__icon popular" />
      ) : (
        <CampaignIcon className="product-item__icon ordered" />
      )}
    </figure>
  );
};

export default ProductItem;
