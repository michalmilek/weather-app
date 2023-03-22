import GlobalStyles from "@mui/material/GlobalStyles";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar";
import {
  CurrentWeatherInterface,
  LocationResponseInterface,
} from "./utils/fetchingData";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [currentTemp, setCurrentTemp] = useState("K");
  const [upcomingDays, setUpcomingDays] = useState({});

  const handleSearchValueSearch = (search: string) => {
    setSearchValue(search);
  };

  const handleData = useCallback((response: LocationResponseInterface) => {
    setData(response);
  }, []);

  const handleWeather = useCallback((response: CurrentWeatherInterface) => {
    setWeather(response);
  }, []);

  const handleLocation = (clickedLocation: any) => {
    setLocation(clickedLocation);
  };

  const handleUpcomingDays = (response: any) => {
    setUpcomingDays(response);
  };

  console.log(location);

  return (
    <div className="App">
      <Navbar
        searchValue={searchValue}
        handleSearchValue={handleSearchValueSearch}
        data={data}
        handleData={handleData}
        location={location}
        handleLocation={handleLocation}
        weather={weather}
        handleWeather={handleWeather}
        currentTemp={currentTemp}
        setCurrentTemp={setCurrentTemp}
      />

      <MainContent
        data={data}
        location={location}
        weather={weather}
        currentTemp={currentTemp}
        upcomingDays={upcomingDays}
        handleUpcomingDays={handleUpcomingDays}
      />
    </div>
  );
}

export default App;
