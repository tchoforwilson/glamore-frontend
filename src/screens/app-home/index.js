import React, { useState } from "react";
import NavBar from "../../layouts/navbar";
import { SearchURLContext } from "../../context";

const AppHome = () => {
  const [searchUrl] = useState("products");
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={{ searchUrl }}>
        <NavBar />
      </SearchURLContext.Provider>
      <main></main>
    </React.Fragment>
  );
};

export default AppHome;
