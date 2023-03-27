import { Box, Typography } from "@mui/material";
import React from "react";
import { CurrentTempType, getWeather } from "../utils/fetchingData";
import { CitiesInterface } from "./FavouriteCities";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
import useFavouriteCity from "../hooks/useFavouriteCity";
import Skeleton from "@mui/material/Skeleton";

//custom hook to fetch http, delete usestate

interface Props {
  city: CitiesInterface;
  removeCity: (index: number) => void;
  index: number;
  currentTemp: CurrentTempType;
}

const FavouriteCity = ({ city, removeCity, index, currentTemp }: Props) => {
  const {
    isError,
    data: fetchedData,
    error,
  } = useFavouriteCity(city, currentTemp);

  console.log(city);
  if (isError) {
    console.log(error);
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
      key={city.name + city.lat + city.lon}
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
        background: "rgba(0,0,0,0.7)",
        borderRadius: "30px",
        padding: "10px 15px",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "150px",
      }}>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}>
        {fetchedData ? (
          <>
            <Typography
              variant="h4"
              sx={{
                cursor: "pointer",
                color: "white",
                fontWeight: 600,
                fontSize: "20px",
              }}>
              {city.name}
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
          </>
        ) : (
          <Skeleton
            variant="text"
            width="100%"
            sx={{ bgcolor: "grey" }}
          />
        )}
      </Box>
      {fetchedData ? (
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
          }}
          variant="h5">
          {Math.round(fetchedData?.main.temp as number)} °{currentTemp}
        </Typography>
      ) : (
        <Skeleton
          variant="text"
          width="100%"
          sx={{ bgcolor: "grey" }}
        />
      )}
    </Box>
  );
};
  
export default FavouriteCity;
