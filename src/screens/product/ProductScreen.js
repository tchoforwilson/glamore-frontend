import React from "react";
import { NavBar } from "../../layouts";
import { SearchURLContext } from "../../contexts";
import { Container } from "@mui/material";
const ProductScreen = () => {
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={{ searchUrl: "products" }}>
        <NavBar />
      </SearchURLContext.Provider>
      <Container>
        <section className="section-store-items">
          <h2>more items from this store</h2>
        </section>
        <section className="section-similar-items">
          <h2>you may also like this</h2>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default ProductScreen;
