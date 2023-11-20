import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import Icon from "../../components/common/icon";
import ToolTip from "../../components/common/ToolTip";

const categories = [
  { name: "hats", alt: "hats" },
  { name: "underwear", alt: "underwear" },
  { name: "bags", alt: "bag" },
  { name: "suits", alt: "suits" },
  { name: "shoes", alt: "shoes" },
  { name: "hoodies", alt: "hoodies" },
  { name: "t-shirts", alt: "t-shirts" },
];

const SectionCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categories.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < categories.length - 1 ? prevIndex + 1 : 0
    );
  };

  const startIndex = currentIndex;
  const endIndex = (startIndex + 6) % categories.length;
  const displayedCategories =
    endIndex > startIndex
      ? categories.slice(startIndex, endIndex)
      : [...categories.slice(startIndex), ...categories.slice(0, endIndex)];

  return (
    <div className="home-categories__container">
      <IconButton className="backward-btn" onClick={handlePrevClick}>
        <ArrowBackIosNewIcon className="backward" />
      </IconButton>

      {displayedCategories.map((category) => (
        <ToolTip
          key={category.name}
          component={
            <Icon
              src={require(`../../assets/icons/categories/${category.name}.svg`)}
              alt={categories.alt}
              className="categories__icon"
            />
          }
          message={category.name}
          position="bottom"
        />
      ))}
      <IconButton className="forward-btn" onClick={handleNextClick}>
        <ArrowForwardIos className="forward" />
      </IconButton>
    </div>
  );
};

export default SectionCategories;
