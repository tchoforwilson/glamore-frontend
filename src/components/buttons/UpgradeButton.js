import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

/**
 * @breif Upgrade buttons for various plans
 * @param {String} to The page or direction of link
 * @returns {JSX}
 */
const UpgradeButton = ({ to }) => {
  return (
    <Link to={to} className="btn btn--upgrade">
      Upgrade{" "}
      <ArrowForwardOutlinedIcon
        sx={{ marginLeft: "1rem", width: "2.5rem", height: "2.5rem" }}
      />
    </Link>
  );
};

export default UpgradeButton;
