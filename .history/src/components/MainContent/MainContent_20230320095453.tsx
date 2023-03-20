import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";
import { KelvinToCelsius } from "../../utils/unitConvert";

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
  const test = "text";
  console.log(test[0]);

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
          <Box>
            <Typography>
              Temperature: {Math.round(KelvinToCelsius(weather.data.main.temp))}{" "}
              °C
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}>
              Clouds:
              <img
                src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
                alt={weather.data.weather[0].description}
              />
              {weather.data.weather[0].description[0].toUpperCase()}
              {weather.data.weather[0].description[0].splice(1)}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MainContent;
