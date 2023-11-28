import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { AppScreenLayout } from "../../layouts";
import CategoriesContainer from "./CategoriesContainer";
import { ProductCard } from "../../components/cards";
import { SortedItemsModal } from "../../components/modals";

const categories = [
  { name: "t-shirts", id: 1 },
  { name: "hats", id: 2 },
  { name: "tank tops", id: 3 },
  { name: "jeans", id: 4 },
  { name: "skirts", id: 5 },
  { name: "trench Coats", id: 6 },
  { name: "tracksuits", id: 7 },
  { name: "backpacks", id: 8 },
  { name: "sneakers", id: 9 },
  { name: "swimsuits", id: 10 },
  { name: "bikinis", id: 11 },
];

const product = {
  id: "1abc",
  name: "Cotton beige T-shirt",
  price: 700,
  currency: "XAF",
};

const ShopScreen = () => {
  const [openSortedModal, setOpenSortedModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("jeans");
  const handleCategoryClick = (name) => () => {
    setCurrentCategory(name);
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
  const handleReset = () => {
    setOpenSortedModal(false);
  };
  return (
    <AppScreenLayout searchPath="products">
      <div className="container">
        {/** Section categories */}
        <section className="section-shop-categories">
          <div className="shop-categories">
            <TuneIcon
              className="shop-categories__tune"
              onClick={() => setOpenSortedModal(true)}
            />
            {
              <CategoriesContainer
                categories={categories}
                currentCategory={currentCategory}
                handleCategoryClick={handleCategoryClick}
              />
            }
          </div>
        </section>
        {/** Section product items */}
        <section className="section-shop-products" id="section-sticky">
          <div className="shop-products__items">
            {Array.from({ length: 20 }).map((_, index) => (
              <ProductCard key={Math.random() % 100} product={product} />
            ))}
          </div>
        </section>
      </div>
      {/** Sort item modal */}
      <SortedItemsModal
        isOpen={openSortedModal}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </AppScreenLayout>
  );
};

export default ShopScreen;
