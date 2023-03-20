import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";
import { KelvinToCelsius, KelvinToFahrenheit } from "../../utils/unitConvert";
import CardMedia from "@mui/material/CardMedia";
import { Card, Link, Button } from "@mui/material";
import axios from "axios";

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

const MainContent = ({
  data,
  location,
  weather,
  currentTemp,
  upcomingDays,
  setUpcomingDays,
}: any) => {
  /*   console.log(Object.keys(data).length !== 0);
  if (Object.keys(data).length !== 0) {
    const { name, state, local_names, country, lat, lon } = data[0];

  } */
  const today = new Date();

  useEffect(() => {
    console.log(upcomingDays);
    console.log(location);
  }, [upcomingDays, location]);

  const fetchTheWeatherForUpcomingDays = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setUpcomingDays(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
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
            <Button
              onClick={() => fetchTheWeatherForUpcomingDays()}
              variant="contained"
              color="secondary">
              See the weather for upcoming days
            </Button>
          </Card>
        )}

        {Object.keys(upcomingDays).length !== 0 && (
          <Box>
            {upcomingDays?.data?.list
              ?.filter((day: any) => day.dt_txt.includes("12:00:00"))
              .map((day: any) => (
                <Card>
                  <Typography>TEST</Typography>
                </Card>
              ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default MainContent;
