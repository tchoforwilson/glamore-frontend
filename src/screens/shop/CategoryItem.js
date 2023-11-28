import React from "react";

/**
 * @breif Render a category item with name
 * @param {String} name Category item name
 * @param {Boolean} active Whether the category is active
 * @returns {JSX}
 */
const CategoryItem = ({ name, active, onClick }) => {
  const handleClick = (name) => onClick(name);
  return (
    <span
      className={`shop-categories__item ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {name}
    </span>
  );
};

export default CategoryItem;
