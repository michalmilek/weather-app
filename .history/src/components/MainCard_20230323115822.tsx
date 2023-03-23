import React, { useEffect } from "react";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import {
  CurrentTempType,
  fetchTheWeatherForUpcomingDays,
  WeatherForUpcomingDaysInterface,
} from "../utils/fetchingData";
import { city } from "./MainContent/MainContent";
interface MainCardInterface {
  weatherIcon: string;
  weatherDesc: string;
  temp: number;
  tempFeelsLike: number;
  currentTemp: CurrentTempType;
  pressure: number;
  humidity: number;
  speed: number;
  location: {
    lat: number;
    lon: number;
    name: string;
    country: string;
    state: string;
  } | null;
  handleUpcomingDays: (response: WeatherForUpcomingDaysInterface) => void;
  upcomingDays: WeatherForUpcomingDaysInterface | null;
  addCity: (city: string, lonN: number, latN: number) => void;
  cities: city[];
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  handleModal,
  handleUpcomingDays,
  addCity,
  upcomingDays,
  cities,
}: MainCardInterface) => {
  useEffect(() => {
    console.log(upcomingDays);
  }, [upcomingDays]);

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
        onClick={async () => {
          handleUpcomingDays(
            (await fetchTheWeatherForUpcomingDays(
              location!.lat as number,
              location!.lon as number,
              currentTemp as CurrentTempType
            )) as WeatherForUpcomingDaysInterface
          );
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
