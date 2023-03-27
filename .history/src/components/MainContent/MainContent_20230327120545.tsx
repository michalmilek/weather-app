import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";
import SmallCard from "../SmallCard";
import MainCard from "../MainCard";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import FavouriteCities from "../FavouriteCities";
import { uniqBy } from "lodash";
import {
  CurrentTempType,
  fetchTheWeatherForUpcomingDays,
  getWeather,
  LocationInterface,
  WeatherItem,
} from "../../utils/fetchingData";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useWeather from "../../hooks/useWeather";

export interface Options {
  day: "numeric";
  year: "numeric";
  month: "short";
}

export const options: Options = {
  day: "numeric",
  year: "numeric",
  month: "short",
};

export interface city {
  city: string;
  lat: number;
  lon: number;
}

interface Props {
  location: LocationInterface | null;
  currentTemp: CurrentTempType;
}

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

const MainContent = ({ location, currentTemp }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cities, setCities] = useState<city[] | []>(() => {
    const savedItem = localStorage.getItem("Cities");
    const parsedItem = JSON.parse(savedItem || "");
    return parsedItem;
  });

  const handleModal = (arg: boolean) => {
    setIsModalOpen(arg);
  };

  const addCity = (city: string, lonN: number, latN: number) => {
    const addedArray = [...cities, { city: city, lon: lonN, lat: latN }];
    const nonDuplicatedCities = uniqBy(addedArray, "city");
    console.log(nonDuplicatedCities);
    setCities(nonDuplicatedCities);
  };

  function removeCity(index: number) {
    const newArray = [...cities];
    newArray.splice(index, 1);
    console.log(newArray);
    setCities(newArray);
    console.log(cities);
  }

  useEffect(() => {
    localStorage.setItem("Cities", JSON.stringify(cities));
  }, [cities]);

  /*   const { isLoading, data: fetchedData } = useQuery({
    queryKey: ["weatherFetch", location?.name, currentTemp],
    queryFn: () => {
      if (location) {
        const response = getWeather(
          location.lat,
          location.lon,
          currentTemp
        ).then((res) => res);
        return response;
      }
    },
    retry: false,
  }); */
  const {
    data: fetchedData,
    isLoading,
    isFetching,
  } = useWeather(location, currentTemp);

  const { data: fetchedDataForUpcomingDays } = useQuery({
    queryKey: ["weatherForUpcomingDays", location?.name, currentTemp],
    queryFn: () => {
      if (location) {
        const response = fetchTheWeatherForUpcomingDays(
          location!.lat,
          location!.lon,
          currentTemp
        ).then((res) => res);
        return response;
      }
    },
    retry: false,
  });

  const today = new Date();
  let daysMonthsArray = undefined;
  let tempArray = undefined;
  if (fetchedDataForUpcomingDays) {
    const days = fetchedDataForUpcomingDays?.list
      ?.filter((day: WeatherItem) => day.dt_txt.includes("12:00:00"))
      .map((day: WeatherItem) => day.dt_txt);

    const daysArray = days?.map((dateString: string) => new Date(dateString));
    daysMonthsArray = daysArray?.map(
      (date: Date) => `${date.getDate() + ".0" + (date.getMonth() + 1)}`
    );

    tempArray = fetchedDataForUpcomingDays?.list
      ?.filter((day: WeatherItem) => day.dt_txt.includes("12:00:00"))
      .map((day: WeatherItem) => Math.round(day.main.temp));
  }

  const data1 = {
    labels: daysMonthsArray,
    datasets: [
      {
        label: `Temperature °${currentTemp}`,
        data: tempArray,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  const options1 = {
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 30,
            weight: "600",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 20,
            },
          },
        },
      },
      title: {
        display: true,
        text: "Temperature for upcoming 5 days",
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
          minHeight: "1080px",
          marginTop: "50px",
          maxWidth: "100vw",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url(${Image1})`,
        }}>
        {location && (
          <>
            <Typography
              variant="h1"
              align="center"
              sx={{ color: "white", zIndex: 10, fontSize: "90px", mt: "30px" }}>
              {location?.name}, {location?.country}, {location?.state}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "gold", fontSize: "20px" }}>
              {today.toLocaleDateString("en-GB", options)}
            </Typography>
          </>
        )}
        {/*  {isLoading ? (
          <Typography sx={{ marginTop: "30px" }}>
            <CircularProgress sx={{ height: "50px", width: "50px" }} />
          </Typography>
        ) : (
          <Typography sx={{ marginTop: "30px" }}>
            "Search for your city"
          </Typography>
        )} */}
        {/*         {isLoading && (
          <CircularProgress sx={{ height: "50px", width: "50px" }} />
        )} */}
        {fetchedData && (
          <MainCard
            cities={cities}
            addCity={addCity}
            location={location}
            currentTemp={currentTemp}
            handleModal={handleModal}
          />
        )}
        {fetchedDataForUpcomingDays && isModalOpen && (
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.6)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
              alignContent: "center",
              position: "fixed",
              height: "100vh",
              width: "100vw",
              top: "0",
              left: "0",
              zIndex: 15,
              cursor: "pointer",
            }}>
            <Box sx={{ height: "400px", position: "relative", width: "500px" }}>
              <Bar
                data={data1}
                options={options1}></Bar>
            </Box>

            <Box
              sx={{
                display: { lg: "grid", xl: "flex" },
                gridTemplateColumns: {
                  xm: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}>
              {fetchedDataForUpcomingDays?.list
                ?.filter((day: WeatherItem) => day.dt_txt.includes("12:00:00"))
                .map((day: WeatherItem) => (
                  <SmallCard
                    handleModal={handleModal}
                    data={day.dt_txt}
                    currentTemp={currentTemp}
                    weatherIcon={day.weather[0].icon}
                    speed={day.wind.speed}
                    pressure={day.main.pressure}
                    humidity={day.main.humidity}
                    weatherDesc={day.weather[0].description}
                    tempFeelsLike={day.main.feels_like}
                    temp={day.main.temp}
                  />
                ))}
            </Box>
          </Box>
        )}
        <FavouriteCities
          removeCity={removeCity}
          cities={cities}
          currentTemp={currentTemp}
        />
      </Box>
    </>
  );
};

export default MainContent;
