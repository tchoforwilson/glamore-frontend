import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { FollowButton, ShareButton } from "../../components/buttons";
import { AppScreenLayout } from "../../layouts";
import { ProductCard } from "../../components/cards";

const product = { name: "Cotton beige T-shirt", price: 700, currency: "XAF" };

const PreviewStoreScreen = () => {
  const { id } = useParams();
  const searchPath = useMemo(() => ({ searchUrl: `/${id}/products` }), [id]);
  return (
    <AppScreenLayout searchPath={searchPath}>
      <div className="container">
        {/* Store Images */}
        <section className="preview-store__section section-images">
          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            <Grid
              item
              md={1}
              sm={1}
              sx={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <div className="preview-store__icon-container">
                <WestRoundedIcon className="preview-store__icon" />
              </div>
            </Grid>
            <Grid item md={11} sm={11}>
              <div className="preview-store__images">
                <img
                  src={require("../../assets/images/hat-boy.png")}
                  className="preview-store__background"
                  alt="store background"
                />
                <img
                  src={require("../../assets/images/profile.png")}
                  className="preview-store__logo"
                  alt="Store logo"
                />
              </div>
            </Grid>
          </Grid>
        </section>
        {/* Store Information */}
        <section className="preview-store__section section-store-info">
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item md={4} sm={12} sx={{ textAlign: "center" }}>
              <h1 className="preview-store__name">Francisca's fashion store</h1>
              <span className="preview-store__products">83 products</span>
              <div className="d-flex justify-content--evenly mt-2">
                <FollowButton />
                <ShareButton />
              </div>
            </Grid>
          </Grid>
        </section>
        {/* Store products */}
        <section
          className="preview-store__section section-store-products"
          id="section-sticky"
        >
          <h2 className="preview-store__header">featured products</h2>
          <div className="preview-store__items">
            {Array.from({ length: 20 }).map((_, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
    </AppScreenLayout>
  );
};

export default PreviewStoreScreen;
