import React, { useState } from "react";
import SellIcon from "@mui/icons-material/Sell";
import Campaign from "@mui/icons-material/Campaign";
import { currencyFormatter } from "../../utilities/functions";

const ListingCard = ({ listing }) => {
  const [images, setImages] = useState([
    listing.imageCover,
    ...listing?.images,
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => () => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
    e.currentTarget.addEventListener("touchmove", handleTouchMove);

    function handleTouchMove(e) {
      const touchEndX = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      const touchDiffX = touchStartX - touchEndX;
      const touchDiffY = touchStartY - touchEndY;

      if (Math.abs(touchDiffX) > Math.abs(touchDiffY)) {
        // Horizontal swipe detected
        if (touchDiffX > 0) {
          // Swipe left
          setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        } else {
          // Swipe right
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        }
      }

      e.currentTarget.removeEventListener("touchmove", handleTouchMove);
    }
  };

  return (
    <div className="listing-card">
      <div className="listing-card__info">
        <img
          src={images[activeIndex]}
          className="listing-card__img"
          onTouchStart={handleTouchStart}
          alt={listing._id}
        />
        <div className="listing-card__dots">
          <span
            className={`${activeIndex === 0 ? "active" : ""}`}
            onClick={handleDotClick(0)}
          ></span>
          <span
            className={`${activeIndex === 1 ? "active" : ""}`}
            onClick={handleDotClick(1)}
          ></span>
          <span
            className={`${activeIndex === 2 ? "active" : ""}`}
            onClick={handleDotClick(2)}
          ></span>
        </div>
        <div className="listing-card__price">
          {currencyFormatter(listing.currency, listing.price)}
        </div>
      </div>
      <div className="listing-card__details">
        <p className="listing-card__description">{listing.name} </p>
        <button className="listing-card__button incentive">
          <SellIcon className="listing-card__icon sell-icon" />
          <span className="listing-card__text">Incentive</span>
        </button>
        <button className="listing-card__button advertise">
          <Campaign className="listing-card__icon campaign-icon" />
          <span className="listing-card__text">Advertise</span>
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
