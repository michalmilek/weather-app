import { Box, Tab, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

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

        <Box>
          <TextField
            id="search-bar"
            className="text"
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          <IconButton
            type="submit"
            aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </Box>

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
