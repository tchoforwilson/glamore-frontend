import React, { useState } from "react";
import { Link } from "react-router-dom";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { AppScreenLayout } from "../../layouts";
import { ProductCard } from "../../components/cards";
import FollowedShops from "./FollowedShops";

const product = { name: "Cotton beige T-shirt", price: 700, currency: "XAF" };

const shops = [
  {
    id: 1,
    logo: require("../../assets/images/list.jpg"),
    name: "Hanna's store",
  },
  {
    id: 2,
    logo: require("../../assets/images/bike.jpg"),
    name: "the way shop",
  },

  {
    id: 3,
    logo: require("../../assets/images/image3.jpg"),
    name: "Francisca Store",
  },
];

const ProfileScreen = () => {
  const [showShops, toggleShowShops] = useState(true);
  return (
    <AppScreenLayout>
      <section className="section-profile">
        <div className="profile">
          <figure>
            <img
              src={require("../../assets/images/profile.png")}
              alt="profile"
              className="profile__image"
            />
            <figcaption className="profile__details">
              <span className="profile__name">nfor gift</span>
              <span
                className="profile__shops"
                onClick={() => toggleShowShops(!showShops)}
              >
                Following 225 shops
              </span>
              <FollowedShops shops={shops} active={showShops} />
            </figcaption>
          </figure>
          <div className="profile__links">
            <Link to="/edit-profile" className="btn btn--white profile__button">
              <BorderColorOutlinedIcon className="profile__icon" />
              <span>edit profile</span>
            </Link>
            <Link
              to="/account-setting"
              className="btn btn--white ms-2 profile__button"
            >
              <SettingsOutlinedIcon className="profile__icon" />
              <span>account setting</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-items" id="section-sticky">
        <div className="section-header">
          <span className="section-header__item active">saved items</span>
          <span className="section-header__item">shops you follow</span>
        </div>
        <div className="product-items">
          {Array.from({ length: 20 }).map((_, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </AppScreenLayout>
  );
};

export default ProfileScreen;
