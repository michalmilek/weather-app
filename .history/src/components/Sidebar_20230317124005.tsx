import Box from "@mui/material/Box";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: "90vh",
        position: "fixed",
        top: "5vh",
        left: "5vw",
      }}></Box>
  );
};

export default Sidebar;
