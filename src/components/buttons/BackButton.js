import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
/**
 * @breif Render a back link with name "back" and "west icon"
 * @param {String} to Link to go back to
 * @returns {JSX}
 */
const BackButton = ({ to }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      justifyContent={{ md: "center", xs: "flex-start" }}
    >
      <Link className="btn btn--back" to={to}>
        <WestRoundedIcon fontSize="large" sx={{ marginRight: 1 }} />
        <span>Back</span>
      </Link>
    </Box>
  );
};

export default BackButton;
