import { Box, colors, Tab, TextField } from "@mui/material";
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

        <Box sx={{ minWidth: "400px", position: "relative" }}>
          <TextField
            id="search-bar"
            className="text"
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              width: "100%",
              height: "100%",
              transition: "all 0.3s ease"
              input: {
                color: "white",
              },
              "& .MuiInputLabel-root": { color: "white" },
              field: {
                borderColor: "white",
              },
              fieldset: {
                borderColor: "white",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: "4%",
              transform: "translate(0, -50%)",
            }}
            aria-label="search">
            <SearchIcon style={{ fill: "white" }} />
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
