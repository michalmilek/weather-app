import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { CurrentTempType } from "../utils/fetchingData";
import { city } from "./MainContent/MainContent";
import useWeather from "../hooks/useWeather";
interface MainCardInterface {
  currentTemp: CurrentTempType;
  location: {
    lat: number;
    lon: number;
    name: string;
    country: string;
    state: string;
  } | null;
  addCity: (city: string, lonN: number, latN: number) => void;
  cities: city[];
  handleModal: (arg: boolean) => void;
}

const MainCard = ({
  currentTemp,
  location,
  handleModal,
  addCity,
  cities,
}: MainCardInterface) => {
  const {
    data: fetchedData,
    isLoading,
    isError,
    error,
    isFetching,
  } = useWeather(location, currentTemp);
  /*   if (isLoading) {
    return <CircularProgress sx={{ height: "50px", width: "50px" }} />;
  } */
  if (isError) {
    return <div>{error as string}</div>;
  }
  if (!fetchedData) {
    return (
      <Typography
        variant="h5"
        sx={{ fontSize: "50px", color: "white", mt: "50px" }}>
        Look for your city
      </Typography>
    );
  }

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "350px",
        padding: "20px 40px",
        gap: 2,
        background: "rgba(0, 0, 0, 0.4)",
        border: "none",
        borderRadius: 10,
        color: "white",
      }}>
      <Button
        onClick={() => {
          addCity(location!.name, location!.lon, location!.lat);
          console.log(cities);
          console.log(location);
        }}
        color="info"
        variant="outlined">
        Add to favourite cities
      </Button>
      <CardMedia
        component="img"
        src={`https://openweathermap.org/img/wn/${
          fetchedData!.weather[0].icon
        }.png`}
        alt={fetchedData!.weather[0].description}
        sx={{ height: 150, width: 150 }}
      />
      <Typography>
        <strong>Temperature: </strong>
        {Math.round(fetchedData.main.temp)} °{currentTemp}
      </Typography>
      <Typography>
        <strong>Perceptible Temperature: </strong>
        {Math.round(fetchedData.main.feels_like)} °{currentTemp}
      </Typography>
      <Typography>
        <strong>Pressure: </strong>
        {fetchedData.main.pressure} hPa
      </Typography>
      <Typography>
        <strong>Humidity: </strong>
        {fetchedData.main.humidity} g/m^3
      </Typography>
      <Typography>
        <strong>Wind: </strong>
        {fetchedData.wind.speed}km/h
      </Typography>
      <Button
        onClick={async () => {
          handleModal(true);
        }}
        variant="contained"
        color="secondary">
        See the weather for upcoming days
      </Button>
    </Card>
  );
};

export default MainCard;
