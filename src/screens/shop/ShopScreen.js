import React, { useState } from "react";
import { Container } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { AppScreenLayout } from "../../layouts";
import { ProductCard } from "../../components/cards";
import CategoryItem from "./CategoryItem";

const categories = [
  { name: "t-shirts", id: 1 },
  { name: "hats", id: 2 },
  { name: "tank tops", id: 3 },
  { name: "jeans", id: 4 },
  { name: "skirts", id: 5 },
  { name: "trench Coats", id: 7 },
  { name: "tracksuits", id: 8 },
  { name: "backpacks", id: 9 },
  { name: "sneakers", id: 10 },
  { name: "swimsuits", id: 11 },
  { name: "bikinis", id: 12 },
];

const product = { name: "Cotton beige T-shirt", price: 700, currency: "XAF" };

const ShopScreen = () => {
  const [currentCategory, setCurrentCategory] = useState("jeans");
  const handleCategoryClick = (name) => () => {
    setCurrentCategory(name);
  };
  return (
    <AppScreenLayout searchPath="products">
      <Container>
        <section className="section-shop-categories">
          <div className="shop-categories">
            <TuneIcon className="shop-categories__icon" />
            {categories.map((category) => (
              <CategoryItem
                name={category.name}
                active={currentCategory === category.name}
                key={category.id}
                onClick={handleCategoryClick(category.name)}
              />
            ))}
          </div>
        </section>
        <section className="section-shop-products" id="section-sticky">
          <div className="shop-products__items">
            {Array.from({ length: 20 }).map((_, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </Container>
    </AppScreenLayout>
  );
};

export default ShopScreen;
