import { useQuery } from "@tanstack/react-query";
import {
  CurrentTempType,
  fetchTheWeatherForUpcomingDays,
} from "../utils/fetchingData";

interface KeyObject {
  lat: number;
  lon: number;
  name: string;
}

const useWeatherForUpcomingDays = (
  key: KeyObject | null,
  currentTemp: CurrentTempType
) => {
  return useQuery({
    queryKey: ["weatherFetch", key?.name],
    queryFn: () => {
      const response = fetchTheWeatherForUpcomingDays(
        key!.lat,
        key!.lon,
        currentTemp
      ).then((res) => res);
      return response;
    },
    enabled: !!key,
    retry: false,
  });
};

export default useWeatherForUpcomingDays;
