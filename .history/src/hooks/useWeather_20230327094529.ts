import { useQuery } from "@tanstack/react-query";
import { CurrentTempType, getWeather } from "../utils/fetchingData";

interface KeyObject {
  lat: number;
  lon: number;
  name: string;
}

const useWeather = (key: KeyObject, currentTemp: CurrentTempType) => {
  const { data } = useQuery(["weather", key.name], () =>
    getWeather(key.lat, key.lon, currentTemp)
  );
  return data;
};

export default useWeather;
