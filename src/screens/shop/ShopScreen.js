import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { AppScreenLayout } from "../../layouts";
import CategoriesContainer from "./CategoriesContainer";
import { ProductCard } from "../../components/cards";
import { SortedItemsModal } from "../../components/modals";
import { useGetProductsQuery } from "../../store/entities/products.api";
import { Paper } from "@mui/material";
import { useGetCategoriesQuery } from "../../store/entities/categories.api";

const categoriesData = [
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

// const product = {
//   id: "1abc",
//   name: "Cotton beige T-shirt",
//   price: 700,
//   currency: "XAF",
// };

const ShopScreen = () => {
  const [openSortedModal, setOpenSortedModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [productFilters, setProductFilters] = useState({});
  const handleCategoryClick = (name) => () => {
    setCurrentCategory(name);
  };
  const handleSubmit = (data) => {
    console.log(data);
    let filter = {};

    if (data.price.min) filter = { ...filter, "price[min]": data.price.min };
    if (data.price.max) filter = { ...filter, "price[max]": data.price.max };
    if (data.genders?.length > 0) filter = { ...filter, genders: data.genders };
    if (data.brands?.length > 0) filter = { ...filter, brands: data.brands };
    if (data.colors?.length > 0) filter = { ...filter, colors: data.colors };
    if (data.sizes?.length > 0) filter = { ...filter, sizes: data.sizes };
    if (data.deals?.length > 0) filter = { ...filter, deals: data.deals };
    if (data.sort?.length > 0) filter = { ...filter, sort: data.sort };
    if (data.materials?.length > 0)
      filter = { ...filter, materials: data.materials };

    setProductFilters(filter);
    setOpenSortedModal(false);
    console.log(filter);
  };

  const handleReset = () => {
    setOpenSortedModal(false);
  };

  const products = useGetProductsQuery({ ...productFilters, category: currentCategory });
  const categories = useGetCategoriesQuery();

  const alertStyles = {
    p: 2,
    fontSize: "1.9rem",
    fontWeight: "bold",
    textAlign: "center",
    my: 10,
    boxShadow: "0rem 0rem 3.5rem 0.8rem rgba(0, 0, 0, 0.18)",
    border: 0,
    borderRadius: "20px",
    transition: 'all 300ms linear',
    "&.danger": {
      color: "red",
    },
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
                categories={categories.data?.data.length ? categories.data?.data : categoriesData}
                currentCategory={currentCategory}
                handleCategoryClick={handleCategoryClick}
              />
            }
          </div>
        </section>
        {/** Section product items */}
        <section className="section-shop-products" id="section-sticky">
          {products.isFetching && (
            <Paper sx={alertStyles}>Loading Products...</Paper>
          )}

          {products.isError && !products.isFetching && (
            <Paper sx={alertStyles} className="danger">
              Oups, something went wrong
            </Paper>
          )}

          {products.data?.data.length < 1 &&
            Object.keys(productFilters).length > 0 && (
              <Paper sx={alertStyles}>
                No products found with matching filters
              </Paper>
            )}

          {!products.isError &&
            !products.isFetching &&
            products.data?.data.length > 0 && (
              <div className="shop-products__items">
                {products.data?.data.map((product, index) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
        </section>
      </div>
      {/** Sort item modal */}
      <SortedItemsModal
        isOpen={openSortedModal}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        onClose={() => setOpenSortedModal(false)}
      />
    </AppScreenLayout>
  );
};

export default ShopScreen;
