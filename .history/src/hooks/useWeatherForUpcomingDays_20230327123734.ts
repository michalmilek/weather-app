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
  currentTemp: CurrentTempType,
  modalOpen: boolean
) => {
  return useQuery({
    queryKey: [
      "weatherFetchForUpcomingDays",
      key?.name,
      currentTemp,
      modalOpen,
    ],
    queryFn: () => {
      const response = fetchTheWeatherForUpcomingDays(
        key!.lat,
        key!.lon,
        currentTemp
      ).then((res) => res);
      return response;
    },
    enabled: !!key && !!modalOpen,
    retry: false,
  });
};

export default useWeatherForUpcomingDays;
