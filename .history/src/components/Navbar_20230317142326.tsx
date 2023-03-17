import { Tab } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";

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
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            userSelect: "none",
          }}>
          <AcUnitIcon
            sx={{
              transform: "rotate(45deg)",
            }}
          />{" "}
          WeatherApp
        </Typography>
        <Tabs sx={{ color: "white" }}>
          <Tab
            sx={{ color: "inherit" }}
            label="Home"
          />
          <Tab
            sx={{ color: "inherit" }}
            label="About"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
