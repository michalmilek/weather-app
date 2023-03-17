import { Tab } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import React from "react";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>test</Typography>
        <Tabs>
          <Tab label="Products" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
