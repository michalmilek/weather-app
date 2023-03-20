import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";
import { KelvinToCelsius } from "../../utils/unitConvert";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";

interface Options {
  day: "numeric";
  year: "numeric";
  month: "short";
}

const options: Options = {
  day: "numeric",
  year: "numeric",
  month: "short",
};

const MainContent = ({ data, location, weather }: any) => {
  /*   console.log(Object.keys(data).length !== 0);
  if (Object.keys(data).length !== 0) {
    const { name, state, local_names, country, lat, lon } = data[0];

  } */
  const today = new Date();

  return (
    <>
      <Box
        sx={{
          minHeight: "1080px",
          marginTop: "50px",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url(${Image1})`,
        }}>
        {Object.keys(location).length !== 0 && (
          <Typography
            variant="h1"
            align="center"
            sx={{ color: "white", zIndex: 10, fontSize: "90px", mt: "30px" }}>
            {location.name}, {location.country}, {location.state}
          </Typography>
        )}
        <Typography
          variant="subtitle1"
          sx={{ color: "gold", fontSize: "20px" }}>
          {today.toLocaleDateString("en-GB", options)}
        </Typography>
        {Object.keys(weather).length !== 0 && (
          <Card
            variant="outlined"
            sx={{
              maxWidth: "300px",
              padding: "40px",
              background: "rgba(255, 255, 255, 0.5)",
            }}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
              alt={weather.data.weather[0].description}
            />
            <Typography>
              <strong>Temperature: </strong>
              {Math.round(KelvinToCelsius(weather.data.main.temp))} °C
            </Typography>
            <Typography>
              <strong>Perceptible Temperature: </strong>
              {Math.round(KelvinToCelsius(weather.data.main.feels_like))} °C
            </Typography>
            <Typography>
              <strong>Pressure: </strong>
              {weather.data.main.pressure} hPa
            </Typography>
            <Typography>
              <strong>Wind: </strong>
              {weather.data.wind.speed}km/h
            </Typography>
          </Card>
        )}
      </Box>
    </>
  );
};

export default MainContent;
