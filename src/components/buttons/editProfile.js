import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

/**
 * @breif Render a back link with name "edit profile" and "edit icon"
 * @param {String} to Link to the form
 * @returns {JSX}
 */
const EditProfile = ({ to, icon: IconComponent, text }) => {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        justifyContent={{ md: "center", xs: "flex-start" }}
      >
        <Link className="btn-Profile" to={to}>
          {IconComponent && (
            <IconComponent fontSize="large" sx={{color: '#cccccc'}} />
          )}
          {text}
        </Link>
      </Box>
    );
  };
  
  export default EditProfile;