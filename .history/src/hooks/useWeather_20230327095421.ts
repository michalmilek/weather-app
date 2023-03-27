import { useQuery } from "@tanstack/react-query";
import { CurrentTempType, getWeather } from "../utils/fetchingData";

interface KeyObject {
  lat: number;
  lon: number;
  name: string;
}

const useWeather = (
  key: KeyObject | null = {
    lat: 32442,
    lon: 342423,
    name: "test",
  },
  currentTemp: CurrentTempType
) => {
  const { data } = useQuery(["weather", key?.name, currentTemp], () => {
    getWeather(key.lat, key.lon, currentTemp);
  });
  return data;
};

export default useWeather;
