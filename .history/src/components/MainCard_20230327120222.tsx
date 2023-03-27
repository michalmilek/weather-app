import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { CurrentTempType } from "../utils/fetchingData";
import { city } from "./MainContent/MainContent";
import useWeather from "../hooks/useWeather";
interface MainCardInterface {
  currentTemp: CurrentTempType;
  location: {
    lat: number;
    lon: number;
    name: string;
    country: string;
    state: string;
  } | null;
  addCity: (city: string, lonN: number, latN: number) => void;
  cities: city[];
  handleModal: (arg: boolean) => void;
}

const MainCard = ({
  currentTemp,
  location,
  handleModal,
  addCity,
  cities,
}: MainCardInterface) => {
  const {
    data: fetchedData,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useWeather(location, currentTemp);

  console.log(location);

  if (!location) {
    return (
      <Typography
        variant="h5"
        sx={{
          mt: "50px",
          color: "white",
          fontSize: "20px",
        }}>
        Look for your city
      </Typography>
    );
  }

  if (isLoading) {
    return <CircularProgress sx={{ height: "50px", width: "50px" }} />;
  }
  if (isError) {
    return <div>{error as string}</div>;
  }

  return <Typography>"Look for your city:"</Typography>;
};

export default MainCard;
