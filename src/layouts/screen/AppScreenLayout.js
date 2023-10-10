import React, { useMemo, useState } from "react";
import { NavBar } from "../navbar";
import { SearchURLContext } from "../../contexts";
import { NavBarContext } from "../../contexts";

/**
 * @breif Render application screen layout
 * @param {String} searchPath Search path or url for search field
 * @param {HTML} children Children elements of the app screen
 * @returns {HTML}
 */
const AppScreenLayout = ({ searchPath, children }) => {
  const [isOpen, toggleNavBar] = useState(false);
  const searchURL = useMemo(
    () => ({ searchUrl: searchPath || "products" }),
    [searchPath]
  );
  const NavBarValue = useMemo(() => ({ isOpen, toggleNavBar }), [isOpen]);
  return (
    <React.Fragment>
      <SearchURLContext.Provider value={searchURL}>
        <NavBarContext.Provider value={NavBarValue}>
          <NavBar />
        </NavBarContext.Provider>
      </SearchURLContext.Provider>
      <main className="app-content">{children}</main>
    </React.Fragment>
  );
};

export default AppScreenLayout;
