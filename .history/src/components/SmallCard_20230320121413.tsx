import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { KelvinToCelsius, KelvinToFahrenheit } from "../utils/unitConvert";

const SmallCard = ({
  weatherIcon,
  temp,
  tempFeelsLike,
  currentTemp,
  pressure,
  humidity,
  speed,
}) => {
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
        src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
        alt={weather.data.weather[0].description}
        sx={{ height: 150, width: 150 }}
      />
      <Typography>
        <strong>Temperature: </strong>
        {Math.round(
          currentTemp === "C"
            ? KelvinToCelsius(weather.data.main.temp)
            : currentTemp === "F"
            ? KelvinToFahrenheit(weather.data.main.temp)
            : weather.data.main.temp
        )}{" "}
        °{currentTemp}
      </Typography>
      <Typography>
        <strong>Perceptible Temperature: </strong>
        {Math.round(
          currentTemp === "C"
            ? KelvinToCelsius(weather.data.main.feels_like)
            : currentTemp === "F"
            ? KelvinToFahrenheit(weather.data.main.feels_like)
            : weather.data.main.feels_like
        )}{" "}
        °{currentTemp}
      </Typography>
      <Typography>
        <strong>Pressure: </strong>
        {weather.data.main.pressure} hPa
      </Typography>
      <Typography>
        <strong>Humidity: </strong>
        {weather.data.main.humidity} g/m^3
      </Typography>
      <Typography>
        <strong>Wind: </strong>
        {weather.data.wind.speed}km/h
      </Typography>
    </Card>
  );
};

export default SmallCard;
