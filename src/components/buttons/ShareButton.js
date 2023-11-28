import React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";

/**
 * @breif Render a share button with it icon
 * @param {Function} onClick Handler when button is clicked
 * @returns {JSX}
 */
const ShareButton = ({ onClick }) => {
  const handleClick = () => onClick;
  return (
    <button className="btn btn-share" onClick={handleClick}>
      <span className="btn-share__text">share</span>
      <IosShareIcon className="btn-share__icon" />
    </button>
  );
};

export default ShareButton;
