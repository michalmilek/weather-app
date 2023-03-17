import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "90vh",
        position: "fixed",
        top: "5vh",
        left: "5vw",
        background: "black",
      }}>
      <Typography
        variant="subtitle1"
        color="white">
        Weather app
      </Typography>
    </Box>
  );
};

export default Sidebar;
