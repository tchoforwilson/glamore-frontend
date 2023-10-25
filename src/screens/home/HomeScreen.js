import React, { useState } from "react";
import { Container } from "@mui/material";
import { AppScreenLayout } from "../../layouts";
import BestSellerItem from "./BestSellerItem";

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
      <Container>
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
        <section className="home-categories" id="section-sticky">
          <h1 className="home-header">browse categories</h1>
        </section>
        <section className="home-essentials">
          <h1 className="home-header">the essentials</h1>
        </section>
        <section className="home-popular">
          <h1 className="home-header">popular buys</h1>
        </section>
      </Container>
    </AppScreenLayout>
  );
};

export default HomeScreen;
