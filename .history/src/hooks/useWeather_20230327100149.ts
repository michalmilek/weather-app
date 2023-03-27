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
  const { data } = useQuery({
    queryKey: ["weatherFetch", key?.name, currentTemp],
    queryFn: () => {
      if (key) {
        const response = getWeather(key.lat, key.lon, currentTemp).then(
          (res) => res
        );
        return response;
      }
    },
  });
  return data;
};

export default useWeather;
