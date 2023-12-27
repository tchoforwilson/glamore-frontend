import React, { useState } from "react";
import { Container } from "@mui/material";
import { AppScreenLayout } from "../../layouts";
import CategoriesContainer from "./CategoriesContainer";
import { ArticleCard, ProductCard } from "../../components/cards";
import BestSellerItem from "./BestSellerItem";
import BestValueCard from "../../components/cards/BestValueCard";
import Hero from "./Hero";

const sellers = [
  {
    title: "Responsible navy suit",
    image: require("../../assets/sellers/seller-1.jpg"),
  },
  {
    title: "Biege and White overall",
    image: require("../../assets/sellers/seller-2.jpg"),
  },
  {
    title: "Lotus Brown Jackets",
    image: require("../../assets/sellers/seller-4.jpg"),
  },
  // {
  //   title: "Comfortable kaki T-shirt",
  //   image: require("../../assets/sellers/seller-3.jpg"),
  // },
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

    return imagesToRender.map((seller) => <ArticleCard article={seller} />);
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
      <Hero />

      <div class="container mx-auto [&>section:not(:first-of-type)]:mt-44">
        {/* Section best sellers */}
        <section className="home-sellers">
          <div className="home-sellers__container grid tablet:grid-cols-3 max-tablet:gap-8 gap-4">
            {sellers.map((seller) => (
              <ArticleCard key={seller.title} article={seller} />
            ))}
          </div>
        </section>

        {/** Section Categories */}
        <section className="home-categories">
          <h3 className="home-header">browse categories</h3>
          <CategoriesContainer />
        </section>

        {/** Section Essentials */}
        <section className="home-essentials" id="section-sticky">
          <div className="grid max-tablet:grid-cols-1 grid-cols-4">
            <div className="max-tablet:hidden"></div>
            <div className="home-products__items grid max-tablet:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 max-tablet:col-span-3">
              {Array.from({ length: 20 }).map((_, index) => (
                <ProductCard key={Math.random() % 100} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/** Section popular buys */}
        <section className="home-popular">
          <h1 className="home-header">Flash Sale</h1>
          <div className="grid tablet:grid-cols-2 laptop:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <ProductCard key={Math.random() % 100} product={product} />
            ))}
          </div>
        </section>

        <section>
          <h3 class="home-header">Glamore - Best Value Offers</h3>
          <div className="grid max-mobile:grid-cols-1 max-tablet:grid-cols-2 grid-cols-4 gap-12">
            {Array.from({ length: 4 }).map((c) => (
              <BestValueCard
                key={Math.random() * c * 100}
                title="Title"
                description="Description"
              />
            ))}
          </div>
        </section>
      </div>
    </AppScreenLayout>
  );
};

export default HomeScreen;
