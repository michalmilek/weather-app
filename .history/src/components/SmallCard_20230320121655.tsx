import { Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { KelvinToCelsius, KelvinToFahrenheit } from "../utils/unitConvert";

const SmallCard = ({
  weatherIcon,
  weatherDesc,
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
        src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
        alt={weatherDesc}
        sx={{ height: 150, width: 150 }}
      />
      <Typography>
        <strong>Temperature: </strong>
        {Math.round(
          currentTemp === "C"
            ? KelvinToCelsius(temp)
            : currentTemp === "F"
            ? KelvinToFahrenheit(temp)
            : temp
        )}{" "}
        °{currentTemp}
      </Typography>
      <Typography>
        <strong>Perceptible Temperature: </strong>
        {Math.round(
          currentTemp === "C"
            ? KelvinToCelsius(tempFeelsLike)
            : currentTemp === "F"
            ? KelvinToFahrenheit(tempFeelsLike)
            : tempFeelsLike
        )}{" "}
        °{currentTemp}
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
    </Card>
  );
};

export default SmallCard;
