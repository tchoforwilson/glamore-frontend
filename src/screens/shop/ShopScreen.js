import React from "react";
import NavBar from "../../layouts/navbar";
import { SearchURLContext } from "../../contexts";

const ShopScreen = () => {
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={{ searchUrl: "products" }}>
        <NavBar />
      </SearchURLContext.Provider>
      <main></main>
    </React.Fragment>
  );
};

export default ShopScreen;
