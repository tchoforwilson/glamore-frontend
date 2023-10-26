import React from "react";
import { Grid, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppScreenLayout } from "../../layouts";
import { ProductCard } from "../../components/cards";
import {
  AddToBagButton,
  FavoriteButton,
  FollowButton,
  ShareButton,
} from "../../components/buttons";
import { currencyFormatter } from "../../utilities/functions";
import { AppSelect } from "../../components/inputs";

const product = { name: "Cotton beige T-shirt", price: 700, currency: "XAF" };

const PreviewProductScreen = () => {
  return (
    <AppScreenLayout searchPath="products">
      <section className="preview-product">
        <Container sx={{ display: "flex", gap: "2rem" }}>
          <ArrowBackIcon className="preview-product__btn" />
          <div className="preview-product__item">
            <Grid container spacing={4}>
              <Grid item md={6} sm={12}>
                <img
                  src={require("./../../assets/images/sitting.jpg")}
                  alt="Preview product"
                  className="preview-product__img"
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <div className="d-flex align-items--center gap-6">
                  <div className="shop-profile">
                    <img
                      src={require("./../../assets/images/image8.jpg")}
                      className="shop-profile__img"
                      alt="Shop Profile"
                    />
                    <div className="shop-profile__details">
                      <h3 className="shop-profile__name">Francisca</h3>
                      <span className="shop-profile__products">
                        83 products
                      </span>
                    </div>
                  </div>
                  <FollowButton />
                </div>
                {/** Preview product details */}
                <div className="preview-detail">
                  <h3 className="preview-detail__title">
                    Toffe T-shit classic
                  </h3>
                  <div className="preview-detail__pricing">
                    <span className="preview-detail__discount">
                      {currencyFormatter("XAF", 700)}
                    </span>
                    <span className="preview-detail__price">
                      {currencyFormatter("XAF", 1000)}
                    </span>
                    <span className="preview-detail__percentage">30% off</span>
                  </div>
                  <p className="preview-detail__description">
                    Manfinity Homeme Men Letter Patched Detail Tee & Drawstring
                    Waist Track Shorts, Random Paisley Scarf Print Shirt &
                    Shorts Without Tee
                  </p>
                </div>
                {/** Preview product actions */}
                <div className="preview-action">
                  <div className="preview-action__item d-flex gap-2">
                    <AppSelect
                      name="size"
                      items={["Size-XXL"]}
                      className="preview-action__select"
                    />
                    <AddToBagButton />
                  </div>
                  <div className="preview-action__item d-flex gap-2">
                    <FavoriteButton />
                    <ShareButton />
                  </div>
                </div>
                {/* Preview product reviews */}
                <div className="preview-review">
                  <div className="d-flex gap-3">
                    <h3 className="preview-review__heading">reviews (15)</h3>
                    <div className="preview-review__average-rating"></div>
                  </div>
                  <div className="preview-review__items">
                    <div className="preview-review__review">
                      <div className="preview-review__detail">
                        <h4 className="preview-review__email">
                          @dr.Dretheboss
                        </h4>
                        <div className="preview-review__rating"></div>
                      </div>
                      <p className="preview-review__text">
                        Much better than any t-shirt I have ever bought before,
                        so fresh and sturdy, it never fades
                      </p>
                    </div>
                  </div>
                  <button className="preview-review__btn">
                    Rate this product
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <section className="preview-more" id="section-sticky">
        <h2 className="section-header">More Items From This Store</h2>
        <Grid container className="justify-content--center">
          <Grid item md={10} sm={12}>
            <div className="preview-more__items">
              {Array.from({ length: 6 }).map((_, index) => {
                return <ProductCard key={index} product={product} />;
              })}
            </div>
          </Grid>
        </Grid>
        <button className="btn btn--white">See More</button>
      </section>
      <section className="preview-addition">
        <h2 className="section-header">You may also like this</h2>
        <div className="preview-addition__items">
          {Array.from({ length: 10 }).map((_, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </section>
    </AppScreenLayout>
  );
};

export default PreviewProductScreen;
