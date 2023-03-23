import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CurrentWeatherInterface } from "../utils/fetchingData";
import FavouriteCity from "./FavouriteCity";

export interface CitiesInterface {
  city: string;
  lon: number;
  lat: number;
}

interface Props {
  cities: CitiesInterface[] | [];
  removeCity: (index: number) => void;
}

/* {
  cities: CitiesInterface[] | string;
  handleCities: (city: { city: string; lon: number; lat: number }) => void;
} */

const FavouriteCities = ({ cities, removeCity, currentTemp }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "60px",
      }}>
      <Typography
        sx={{
          color: "white",
          background: "rgba(0,0,0,0.7)",
          borderRadius: "30px",
          padding: "5px 10px",
        }}
        variant="h3">
        Favourite Cities
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}>
        {cities.length !== 0 ? (
          Object.keys(cities).length !== 0 &&
          cities?.map((city: CitiesInterface, index: number) => (
            <FavouriteCity
              key={city.city}
              city={city}
              removeCity={removeCity}
              index={index}
            />
          ))
        ) : (
          <Typography
            variant="h4"
            sx={{
              cursor: "pointer",
              color: "white",
              fontWeight: 600,
              fontSize: "20px",
            }}>
            Add your favourite city/cities
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FavouriteCities;
