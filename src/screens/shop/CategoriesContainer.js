import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import CategoryItem from "./CategoryItem";

/**
 *
 * @param {Array} categories Array of category items
 * @param {String} currentCategory Currently selected category item
 * @param {Function} callback function to handle category selection
 * @returns
 */
const CategoriesContainer = ({
  categories,
  currentCategory,
  handleCategoryClick,
}) => {
  const isMobile = useMediaQuery("(max-width: 37.7em)");
  const NUM_CATEGORIES_SHOW = 8;
  const [startIndex, setStartIndex] = useState(0);

  /**
   * @breif Shift categories leftward
   */
  const shiftLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  /**
   * @breif Shift categories rightward
   */
  const shiftRight = () => {
    if (startIndex < categories.length - NUM_CATEGORIES_SHOW) {
      setStartIndex(startIndex + 1);
    }
  };
  return (
    <div className="shop-categories__container">
      <IconButton
        className={`shop-categories__btn ${startIndex === 0 ? "hidden" : ""}`}
        onClick={shiftLeft}
      >
        <ArrowBackIosNewIcon className="shop-categories__icon" />
      </IconButton>
      <CategoryItem
        name="All"
        active={currentCategory === "all"}
        onClick={handleCategoryClick("all")}
      />
      {!isMobile
        ? categories
            .slice(startIndex, startIndex + NUM_CATEGORIES_SHOW)
            .map((category) => (
              <CategoryItem
                key={category.id}
                name={category.name}
                active={currentCategory === category.name}
                onClick={handleCategoryClick(category.name)}
              />
            ))
        : categories.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              active={currentCategory === category.name}
              onClick={handleCategoryClick(category.name)}
            />
          ))}
      <IconButton
        className={`shop-categories__btn ${
          startIndex === categories.length - NUM_CATEGORIES_SHOW ? "hidden" : ""
        }`}
        onClick={shiftRight}
      >
        <ArrowForwardIos className="shop-categories__icon" />
      </IconButton>
    </div>
  );
};

export default CategoriesContainer;
