import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

/**
 * @breif Render a favorite button with it icon
 * @param {Function} onClick Handler when button is clicked
 * @returns {JSX}
 */
const FavoriteButton = ({ onClick }) => {
  const handleClick = () => onClick;
  return (
    <button className="btn btn-favorite" onClick={handleClick}>
      <span className="btn-favorite__text">favorite</span>
      <FavoriteBorderIcon className="btn-favorite__icon" />
    </button>
  );
};

export default FavoriteButton;
