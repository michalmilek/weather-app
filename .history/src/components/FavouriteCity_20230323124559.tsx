import { Box, Typography } from "@mui/material";
import React from "react";
import { CitiesInterface } from "./FavouriteCities";

interface Props {
  city: CitiesInterface;
}

const FavouriteCity = ({ city }: Props) => {
  return (
    <Box
      key={city.city + city.lat + city.lon}
      sx={{
        display: "flex",
        gap: "20px",
        background: "rgba(0,0,0,0.7)",
        borderRadius: "30px",
        padding: "5px 10px",
      }}>
      <Typography
        variant="h4"
        sx={{
          cursor: "pointer",
          color: "white",
          fontWeight: 600,
          fontSize: "20px",
        }}>
        {city.city}
      </Typography>
      <Typography
        variant="h4"
        onClick={() => removeCity(index)}
        sx={{
          cursor: "pointer",
          color: "white",
          fontWeight: 600,
          fontSize: "20px",
        }}>
        &times;
      </Typography>
    </Box>
  );
};

export default FavouriteCity;