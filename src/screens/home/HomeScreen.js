import React, { useState } from "react";
import { Container } from "@mui/material";
import { AppScreenLayout } from "../../layouts";
import { ProductCard } from "../../components/cards";
import BestSellerItem from "./BestSellerItem";
import Icon from "../../components/common/icon";
import ToolTip from "../../components/common/ToolTip";

const sellers = [
  {
    text: "Blue and Brunette suits",
    image: require("../../assets/sellers/seller-1.jpg"),
  },
  {
    text: "Biege and White overall",
    image: require("../../assets/sellers/seller-2.jpg"),
  },
  {
    text: "Lotus Brown Jackets",
    image: require("../../assets/sellers/seller-3.jpg"),
  },
  {
    text: "Blue and Brunette suits",
    image: require("../../assets/sellers/seller-4.jpg"),
  },
];

const categories = [
  { name: "hats", alt: "hats" },
  { name: "underwear", alt: "underwear" },
  { name: "bags", alt: "bag" },
  { name: "suits", alt: "suits" },
  { name: "shoes", alt: "shoes" },
  { name: "hoodies", alt: "hoodies" },
  { name: "t-shirts", alt: "t-shirts" },
];

const product = {
  id: "1abc",
  name: "Cotton beige T-shirt",
  price: 700,
  currency: "XAF",
};

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const RenderImages = () => {
    const startIndex = activeIndex;
    const endIndex = Math.min(startIndex + 3, sellers.length);
    const imagesToRender = sellers.slice(startIndex, endIndex);

    return imagesToRender.map((seller) => (
      <BestSellerItem
        key={seller.text}
        imageSrc={seller.image}
        text={seller.text}
      />
    ));
  };

  const RenderDots = () => {
    const dotCount = Math.ceil(sellers.length / 3);

    return Array.from({ length: dotCount }, (_, index) => (
      <span
        key={index}
        onClick={handleDotClick(index * 3)}
        className={index * 3 === activeIndex ? "active" : ""}
      ></span>
    ));
  };

  const handleDotClick = (index) => () => {
    setActiveIndex(index);
  };

  const handlePrevClick = () => {
    if (activeIndex <= 0) return;
    setActiveIndex(activeIndex - 3);
  };
  const handleNextClick = () => {
    if (activeIndex >= sellers.length) return;
    setActiveIndex(activeIndex + 3);
  };

  return (
    <AppScreenLayout searchPath="products">
      {/* Section best sellers */}
      <section className="home-sellers">
        <h1 className="home-header">explore our best sellers</h1>
        <div className="home-sellers__container">
          <RenderImages />
          <span className="prev" onClick={handlePrevClick}>
            &#10094;
          </span>
          <span className="next" onClick={handleNextClick}>
            &#10095;
          </span>
        </div>
        <div className="home-sellers__dots">
          <RenderDots />
        </div>
      </section>
      {/** Section Categories */}
      <section className="home-categories">
        <h1 className="home-header">browse categories</h1>
        <div className="home-categories__container">
          {categories.map((category) => (
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
        </div>
      </section>
      {/** Section Essentials */}
      <section className="home-essentials" id="section-sticky">
        <h1 className="home-header">the essentials</h1>
        <div className="home-products__items">
          {Array.from({ length: 20 }).map((_, index) => (
            <ProductCard key={Math.random() % 100} product={product} />
          ))}
        </div>
      </section>
      {/** Section popular buys */}
      <section className="home-popular">
        <h1 className="home-header">popular buys</h1>
        <div className="home-products__items">
          {Array.from({ length: 20 }).map((_, index) => (
            <ProductCard key={Math.random() % 100} product={product} />
          ))}
        </div>
      </section>
    </AppScreenLayout>
  );
};

export default HomeScreen;
