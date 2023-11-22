import React from "react";
import { FollowButton } from "../../components/buttons";

const FollowShopItem = ({ shop }) => {
  return (
    <div className="follow-shop__item">
      <img src={shop.logo} className="follow-shop__img" alt={shop.name} />
      <span className="follow-shop__name">{shop.name}</span>
      <FollowButton />
    </div>
  );
};

export default FollowShopItem;
