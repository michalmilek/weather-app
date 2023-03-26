import { useQuery } from "@tanstack/react-query";
import React from "react";

const useWeather = (key: any, fn: any) => {
  const { data } = useQuery(key, () => fn);
  return data;
};

export default useWeather;
