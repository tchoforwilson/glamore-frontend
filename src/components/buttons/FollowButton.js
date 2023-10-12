import React from "react";

/**
 * @breif Render a follow button
 * @param {Function} onClick Handler when button is clicked
 * @returns {JSX}
 */
const FollowButton = ({ onClick }) => {
  const handleClick = () => onClick;
  return (
    <button className="btn btn-follow" onClick={handleClick}>
      follow this store
    </button>
  );
};

export default FollowButton;
