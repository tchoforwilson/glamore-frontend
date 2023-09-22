import React, { useState } from "react";
import { NavBar } from "../../layouts";
import { SearchURLContext } from "../../contexts";

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
