import { Card, CardMedia, Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { options } from "./MainContent/MainContent";
interface SmallCardInterface {
  data: string;
  weatherIcon: string;
  weatherDesc: string;
  temp: number;
  tempFeelsLike: number;
  currentTemp: "K" | "F" | "C";
  pressure: number;
  humidity: number;
  speed: number;
  handleUpcomingDays: any;
}

const SmallCard = ({
  data,
  weatherIcon,
  weatherDesc,
  temp,
  tempFeelsLike,
  currentTemp,
  pressure,
  humidity,
  speed,
  handleUpcomingDays,
}: SmallCardInterface) => {
  const smallCardsRef = useRef<HTMLDivElement>(null);
  const date1 = new Date(data);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (smallCardsRef.current) {
        if (!smallCardsRef?.current?.contains(e.target as Node)) {
          handleUpcomingDays(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <Card
      ref={smallCardsRef}
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "300px",
        padding: "10px 20px",
        gap: "1px",
        whiteSpace: "nowrap",
        background: "rgba(20, 18, 18, 0.8)",
        border: "none",
        borderRadius: 10,
        color: "white",
        zIndex: 12,
        cursor: "auto",
      }}>
      <Typography>{date1.toLocaleDateString("en-GB", options)}</Typography>
      <CardMedia
        component="img"
        src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
        alt={weatherDesc}
        sx={{ height: 100, width: 100 }}
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
    </Card>
  );
};

export default SmallCard;
