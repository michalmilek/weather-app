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
import { KelvinToCelsius, KelvinToFahrenheit } from "../../utils/unitConvert";

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

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

const MainContent = ({
  data,
  location,
  weather,
  currentTemp,
  upcomingDays,
  setUpcomingDays,
}: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const today = new Date();
  let daysMonthsArray = undefined;
  let tempArray = undefined;
  if (Object.keys(upcomingDays).length !== 0) {
    const days = upcomingDays?.data?.list
      ?.filter((day: any) => day.dt_txt.includes("12:00:00"))
      .map((day: any) => day.dt_txt);

    const daysArray = days?.map((dateString: string) => new Date(dateString));
    daysMonthsArray = daysArray.map(
      (date: Date) => `${date.getDate() + ".0" + (date.getMonth() + 1)}`
    );

    tempArray = upcomingDays?.data?.list
      ?.filter((day: any) => day.dt_txt.includes("12:00:00"))
      .map((day: any) =>
        Math.round(
          currentTemp === "C"
            ? KelvinToCelsius(day.main.temp)
            : currentTemp === "F"
            ? KelvinToFahrenheit(day.main.temp)
            : day.main.temp
        )
      );
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
            weight: 600,
          },
        },
      },
      title: {
        display: true,
        text: "Temperature for upcoming 5 days",
      },
    },
  };

  useEffect(() => {
    console.log(upcomingDays);
    console.log(location);
  }, [upcomingDays, location]);

  /*   const fetchTheWeatherForUpcomingDays = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setUpcomingDays(response);
    } catch (error) {
      console.error(error);
    }
  }; */

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
        {Object.keys(location).length !== 0 && (
          <Typography
            variant="h1"
            align="center"
            sx={{ color: "white", zIndex: 10, fontSize: "90px", mt: "30px" }}>
            {location.name}, {location.country}, {location.state}
          </Typography>
        )}
        <Typography
          variant="subtitle1"
          sx={{ color: "gold", fontSize: "20px" }}>
          {today.toLocaleDateString("en-GB", options)}
        </Typography>
        {Object.keys(weather).length !== 0 && (
          <MainCard
            setUpcomingDays={setUpcomingDays}
            location={location}
            weatherDesc={weather.data.weather[0].description}
            weatherIcon={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`}
            currentTemp={currentTemp}
            temp={weather.data.main.temp}
            tempFeelsLike={weather.data.main.feels_like}
            speed={weather.data.wind.speed}
            humidity={weather.data.main.humidity}
            pressure={weather.data.main.pressure}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        {Object.keys(upcomingDays).length !== 0 && isModalOpen && (
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
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}>
              {upcomingDays?.data?.list
                ?.filter((day: any) => day.dt_txt.includes("12:00:00"))
                .map((day: any) => (
                  <SmallCard
                    setIsModalOpen={setIsModalOpen}
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
      </Box>
    </>
  );
};

export default MainContent;
