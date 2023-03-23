import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CurrentTempType,
  CurrentWeatherInterface,
  getWeather,
} from "../utils/fetchingData";
import { CitiesInterface } from "./FavouriteCities";

interface Props {
  city: CitiesInterface;
  removeCity: (index: number) => void;
  index: number;
  currentTemp: CurrentTempType;
}

const FavouriteCity = ({ city, removeCity, index, currentTemp }: Props) => {
  const [cityWeather, setCityWeather] =
    useState<CurrentWeatherInterface | null>(null);

  useEffect(() => {
    const fetchWeatherForCity = async () => {
      setCityWeather(
        (await getWeather(
          city.lat,
          city.lon,
          currentTemp
        )) as CurrentWeatherInterface
      );
      console.log(cityWeather);
    };

    fetchWeatherForCity();
  });
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
