import React, { useMemo } from "react";
import { NavBar } from "../../layouts";
import { SearchURLContext } from "../../contexts";

const HomeScreen = () => {
  const searchURL = useMemo(() => ({ searchUrl: "products" }), []);
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={searchURL}>
        <NavBar />
      </SearchURLContext.Provider>
      <main></main>
    </React.Fragment>
  );
};

export default HomeScreen;
