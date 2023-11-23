import React from "react";
import FollowShopItem from "./FollowShopItem";

/**
 *
 * @param {Array} shops Array of shops user follows
 * @param {Boolean} active Active state of follow store dropdown
 * @returns
 */
const FollowedShops = ({ shops, active }) => {
  return (
    <div className={`follow-shop ${active ? "active" : ""}`}>
      <div className="follow-shop__header">
        <h2 className="follow-shop__header-main">Shops you follow</h2>
        <span className="follow-shop__header-sub">{shops.length}</span>
      </div>
      <div className="follow-shop__content">
        {shops.map((shop) => (
          <FollowShopItem key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default FollowedShops;
