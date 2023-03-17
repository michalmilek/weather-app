import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import React from "react";

const Navbar = () => {
  return (
    <AppBar
      position="relative"
      color="primary"
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <Typography variant="h1">Logo</Typography>
      <Typography variant="h1">Logo</Typography>
    </AppBar>
  );
};

export default Navbar;
