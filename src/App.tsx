import GlobalStyles from "@mui/material/GlobalStyles";
import React, { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [currentTemp, setCurrentTemp] = useState("K");
  const [upcomingDays, setUpcomingDays] = useState({});

  //axios generics

  return (
    <div className="App">
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={data}
        setData={setData}
        location={location}
        setLocation={setLocation}
        weather={weather}
        setWeather={setWeather}
        currentTemp={currentTemp}
        setCurrentTemp={setCurrentTemp}
      />

      <MainContent
        data={data}
        location={location}
        weather={weather}
        currentTemp={currentTemp}
        upcomingDays={upcomingDays}
        setUpcomingDays={setUpcomingDays}
      />
    </div>
  );
}

export default App;
