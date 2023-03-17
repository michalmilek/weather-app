import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
      <Toolbar>
        <Typography>test</Typography>
        <Typography>test</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
