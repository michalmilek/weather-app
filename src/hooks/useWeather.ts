import { useQuery } from "@tanstack/react-query";

const useWeather = (key: any, fn: any) => {
  const { data } = useQuery(key, () => fn);
  return data;
};

export default useWeather;
