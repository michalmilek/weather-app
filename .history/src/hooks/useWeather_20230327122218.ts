import { useQuery } from "@tanstack/react-query";
import { CurrentTempType, getWeather } from "../utils/fetchingData";

interface KeyObject {
  lat: number;
  lon: number;
  name: string;
}

const useWeather = (key: KeyObject | null, currentTemp: CurrentTempType) => {
  return useQuery({
    queryKey: ["weatherFetch", key?.name, currentTemp],
    queryFn: () => {
      const response = getWeather(key!.lat, key!.lon, currentTemp).then(
        (res) => res
      );
      return response;
    },
    enabled: !!key?.name,
    retry: false,
  });
};

export default useWeather;
