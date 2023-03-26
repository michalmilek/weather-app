import GlobalStyles from "@mui/material/GlobalStyles";
import { debounce } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar";
import {
  CurrentTempType,
  CurrentWeatherInterface,
  LocationInterface,
  LocationResponseInterface,
  WeatherForUpcomingDaysInterface,
} from "./utils/fetchingData";

function App() {
  const [data, setData] = useState<LocationResponseInterface[] | null>(null);
  const [location, setLocation] = useState<LocationInterface | null>(null);
  const [currentTemp, setCurrentTemp] = useState<CurrentTempType>("K");
  /* 
  const handleData = useMemo(
    () =>
      debounce((response: LocationResponseInterface[]) => {
        setData(response);
      }, 200),
    []
  ); */

  const handleLocation = (clickedLocation: LocationInterface) => {
    setLocation(clickedLocation);
  };

  const handleCurrentTemp = (temp: CurrentTempType) => {
    setCurrentTemp(temp);
  };

  return (
    <div className="App">
      <Navbar
        data={data}
        location={location}
        handleLocation={handleLocation}
        currentTemp={currentTemp}
        handleCurrentTemp={handleCurrentTemp}
      />

      <MainContent
        handleWeather={handleWeather}
        loading={loading}
        setLoading={setLoading}
        data={data}
        location={location as LocationInterface}
        weather={weather}
        currentTemp={currentTemp}
        upcomingDays={upcomingDays as WeatherForUpcomingDaysInterface}
        handleUpcomingDays={handleUpcomingDays}
      />
    </div>
  );
}

export default App;
