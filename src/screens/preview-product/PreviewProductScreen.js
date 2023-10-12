import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AppScreenLayout } from "../../layouts";
import { PreviewCard, ProductCard } from "../../components/cards";

const product = { name: "Cotton beige T-shirt", price: 700, currency: "XAF" };

function PreviewProductScreen() {
  return (
    <AppScreenLayout searchPath="products">
      <section className="section-preview">
        <div className="preview">
          <PreviewCard />
          <ArrowBackIcon className="back" />
        </div>
      </section>
      <section className="section-more">
        <h2>More Items From This Store</h2>
        <div className="products-item">
          {Array.from({ length: 6 }).map((_, index) => {
            return <ProductCard key={index} product={product} />;
          })}
          <button className="btn btn--white round">See More</button>
        </div>
      </section>
      <section className="section-addition">
        <h2>You may also like this</h2>
        <div className="products-item">
          {Array.from({ length: 10 }).map((_, index) => {
            return <ProductCard key={index} product={product} />;
          })}
        </div>
      </section>
    </AppScreenLayout>
  );
}

export default PreviewProductScreen;
