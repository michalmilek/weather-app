import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";
import { KelvinToCelsius, KelvinToFahrenheit } from "../../utils/unitConvert";
import CardMedia from "@mui/material/CardMedia";
import { Card, Link, Button } from "@mui/material";
import axios from "axios";
import SmallCard from "../SmallCard";
import MainCard from "../MainCard";

export interface Options {
  day: "numeric";
  year: "numeric";
  month: "short";
}

export const options: Options = {
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
          <MainCard
            setUpcomingDays={setUpcomingDays}
            location={location}
            weatherDesc={weather.data.weather[0].description}
            weatherIcon={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
            currentTemp={currentTemp}
            temp={weather.data.main.temp}
            tempFeelsLike={weather.data.main.feels_like}
            speed={weather.data.wind.speed}
            humidity={weather.data.main.humidity}
            pressure={weather.data.main.pressure}
            currentTemp={currentTemp}
          />
        )}

        {Object.keys(upcomingDays).length !== 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}>
            {upcomingDays?.data?.list
              ?.filter((day: any) => day.dt_txt.includes("12:00:00"))
              .map((day: any) => (
                <SmallCard
                  data={day.dt_txt}
                  currentTemp={currentTemp}
                  weatherIcon={day.weather[0].icon}
                  speed={day.wind.speed}
                  pressure={day.main.pressure}
                  humidity={day.main.humidity}
                  weatherDesc={day.weather[0].description}
                  tempFeelsLike={day.main.feels_like}
                  temp={day.main.temp}
                />
              ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default MainContent;
