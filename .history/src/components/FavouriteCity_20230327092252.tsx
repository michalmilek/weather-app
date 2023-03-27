import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  CurrentTempType,
  CurrentWeatherInterface,
  getWeather,
} from "../utils/fetchingData";
import { CitiesInterface } from "./FavouriteCities";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircularProgress } from "@mui/material";

//custom hook to fetch http, delete usestate

interface Props {
  city: CitiesInterface;
  removeCity: (index: number) => void;
  index: number;
  currentTemp: CurrentTempType;
}

const FavouriteCity = ({ city, removeCity, index, currentTemp }: Props) => {
  const [cityWeather, setCityWeather] =
    useState<CurrentWeatherInterface | null>(null);

  const {
    isLoading,
    isError,
    data: fetchedData,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["favouriteCity", city.city],
    queryFn: () => {
      if (city) {
        const response = axios
          .get<CurrentWeatherInterface>(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              city.lat
            }&lon=${city.lon}${
              currentTemp === "C"
                ? "&units=metric"
                : currentTemp === "F"
                ? "&units=imperial"
                : ""
            }&appid=${process.env.REACT_APP_API_KEY}`
          )
          .then((res) => res.data);
        return response;
      }
    },
    retry: false,
  });

  if (isError) {
    console.log(error);
  }

  if (isSuccess) {
    console.log(fetchedData);
  }

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
      {isSuccess ? (
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
          }}
          variant="h5">
          {Math.round(fetchedData?.main.temp as number)} °{currentTemp}
        </Typography>
      ) : (
        <CircularProgress sx={{ height: "50px", width: "50px" }} />
      )}
    </Box>
  );
};

export default FavouriteCity;
