import React, { useEffect } from "react";
import { Card, CardMedia, Typography, Button } from "@mui/material";
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
  } | null;
  handleUpcomingDays: (response: any) => void;
  upcomingDays: any;
  addCity: any;
  cities: any;
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
          addCity(location?.name, location?.lon, location?.lat);
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
            await fetchTheWeatherForUpcomingDays(
              location?.lat as number,
              location?.lon as number,
              currentTemp
            )
          );
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
