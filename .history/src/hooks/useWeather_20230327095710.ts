import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  CurrentTempType,
  CurrentWeatherInterface,
  getWeather,
} from "../utils/fetchingData";

interface KeyObject {
  lat: number;
  lon: number;
  name: string;
}

const useWeather = (
  key: KeyObject = {
    lat: 32442,
    lon: 342423,
    name: "test",
  },
  currentTemp: CurrentTempType
) => {
  const { data } = useQuery(["weather", key?.name, currentTemp], () => {
    axios.get<CurrentWeatherInterface>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${key.lat}&lon=${
        key.lon
      }${
        currentTemp === "C"
          ? "&units=metric"
          : currentTemp === "F"
          ? "&units=imperial"
          : ""
      }&appid=${process.env.REACT_APP_API_KEY}`
    );
  });
  return data;
};

export default useWeather;
