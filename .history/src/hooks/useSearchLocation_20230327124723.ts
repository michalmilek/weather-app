import { useQuery } from "@tanstack/react-query";
import { getData } from "../utils/fetchingData";

const useSearchLocation = (searchValue: string) => {
  return useQuery({
    queryKey: ["searchValue", searchValue],
    queryFn: () => {
      const response = getData(searchValue).then((res) => res);
      return response;
    },
    enabled: searchValue.length >= 3,
    retry: false,
  });
};

export default useSearchLocation;
