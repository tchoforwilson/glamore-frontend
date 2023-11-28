import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__header">Oops! Page not found</h1>
      <p className="not-found__text">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="not-found__link">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFoundScreen;
