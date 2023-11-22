import React from "react";

/**
 * @breif Render a follow button
 * @param {Boolean} isFollowing Text for the following of store
 * @param {Function} onClick Handler when button is clicked
 * @returns {JSX}
 */
const FollowButton = ({ isFollowing = false, onClick }) => {
  const handleClick = () => onClick;
  return (
    <button className="btn btn-follow" onClick={handleClick}>
      {isFollowing ? " follow this store" : "unfollow"}
    </button>
  );
};

export default FollowButton;
