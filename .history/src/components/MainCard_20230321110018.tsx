import React from "react";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import { KelvinToCelsius, KelvinToFahrenheit } from "../utils/unitConvert";
import { fetchTheWeatherForUpcomingDays } from "../utils/fetchingData";
interface MainCardInterface {
  weatherIcon: string;
  weatherDesc: string;
  temp: number;
  tempFeelsLike: number;
  currentTemp: "K" | "C" | "F";
  pressure: number;
  humidity: number;
  speed: number;
  location: {
    lat: number;
    lon: number;
    name: string;
    country: string;
    state: string;
  };
  setUpcomingDays: React.Dispatch<React.SetStateAction<{}>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainCard = ({
  weatherIcon,
  weatherDesc,
  temp,
  tempFeelsLike,
  currentTemp,
  pressure,
  humidity,
  speed,
  location,
  setIsModalOpen,
  setUpcomingDays,
}: MainCardInterface) => {
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
      <CardMedia
        component="img"
        src={weatherIcon}
        alt={weatherDesc}
        sx={{ height: 150, width: 150 }}
      />
      <Typography>
        <strong>Temperature: </strong>
        {Math.round(temp)} °{currentTemp}
      </Typography>
      <Typography>
        <strong>Perceptible Temperature: </strong>
        {Math.round(tempFeelsLike)} °{currentTemp}
      </Typography>
      <Typography>
        <strong>Pressure: </strong>
        {pressure} hPa
      </Typography>
      <Typography>
        <strong>Humidity: </strong>
        {humidity} g/m^3
      </Typography>
      <Typography>
        <strong>Wind: </strong>
        {speed}km/h
      </Typography>
      <Button
        onClick={() => {
          fetchTheWeatherForUpcomingDays(location.lat, location.lon);
          setIsModalOpen(true);
        }}
        variant="contained"
        color="secondary">
        See the weather for upcoming days
      </Button>
    </Card>
  );
};

export default MainCard;
