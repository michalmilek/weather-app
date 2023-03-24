import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
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

  /* const fetchWeatherForCity = useCallback(async () => {
    setCityWeather(
      (await getWeather(
        city.lat,
        city.lon,
        currentTemp
      )) as CurrentWeatherInterface
    );
  }, [currentTemp, city.lat, city.lon]);

  useEffect(() => {
    fetchWeatherForCity();
  }, [fetchWeatherForCity]); */
  return (
    <Box
      key={city.city + city.lat + city.lon}
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        background: "rgba(0,0,0,0.7)",
        borderRadius: "30px",
        padding: "10px 15px",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
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
      <Typography
        sx={{
          fontSize: "16px",
          color: "white",
        }}
        variant="h5">
        {Math.round(cityWeather?.main.temp as number)} °{currentTemp}
      </Typography>
    </Box>
  );
};

export default FavouriteCity;
