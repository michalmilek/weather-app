import { Tab } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import React from "react";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Typography>test</Typography>
        <Tabs sx={{ color: "white" }}>
          <Tab label="Home" />
          <Tab label="About" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;