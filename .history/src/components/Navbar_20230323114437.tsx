import {
  Box,
  colors,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  TextField,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import { useEffect, useState } from "react";
import {
  CurrentTempType,
  CurrentWeatherInterface,
  getData,
  getWeather,
  LocationInterface,
  LocationResponseInterface,
} from "../utils/fetchingData";
import SearchBar from "./SearchBar";
import { DebouncedFunc } from "lodash";

interface Props {
  data: LocationResponseInterface | null;
  handleData: DebouncedFunc<(response: LocationResponseInterface) => void>;
  location: LocationInterface | null;
  handleLocation: (clickedLocation: LocationInterface) => void;
  weather: CurrentWeatherInterface | null;
  handleWeather: (response: CurrentWeatherInterface) => void;
  currentTemp: CurrentTempType;
  handleCurrentTemp: (temp: CurrentTempType) => void;
}

const Navbar = ({
  data,
  handleData,
  location,
  handleLocation,
  handleWeather,
  currentTemp,
  handleCurrentTemp,
}: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (search: string) => {
    setSearchValue(search);
  };

  useEffect(() => {
    const fetchData = async () => {
      handleData((await getData(searchValue)) as LocationResponseInterface);
    };

    searchValue.length >= 3 && fetchData();
  }, [searchValue, handleData]);

  useEffect(() => {
    const fetchWeather = async () => {
      handleWeather(
        (await getWeather(
          location?.lat as number,
          location?.lon as number,
          currentTemp as CurrentTempType
        )) as CurrentWeatherInterface
      );
    };

    location && fetchWeather();
  }, [location, currentTemp, handleWeather]);

  return (
    <AppBar
      sx={{
        minHeight: "50px",
        maxWidth: "100vw",
        background: "#147FF1",
      }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            userSelect: "none",
          }}>
          <AcUnitIcon
            sx={{
              transform: "rotate(45deg)",
            }}
          />{" "}
          WeatherApp
        </Typography>

        <FormControl
          sx={{
            transition: "all 0.3s ease",
            label: {
              color: "white",
            },
            input: {
              color: "white",
            },
            "& .MuiInputLabel-root": { color: "white" },
            field: {
              borderColor: "white",
            },
            fieldset: {
              borderColor: "white",
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: "white",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "white",
              },
            },
            "& label.Mui-focused": {
              color: "white",
            },
            // focused color for input with variant='standard'
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
            // focused color for input with variant='filled'
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "white",
            },
            // focused color for input with variant='outlined'
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}>
          <InputLabel id="demo-simple-select-label">Unit: </InputLabel>
          <Select
            sx={{ color: "white" }}
            value={currentTemp}
            onChange={(e) => {
              handleCurrentTemp(e.target.value as CurrentTempType);
            }}
            label="Unit">
            <MenuItem value={"K"}>Kelvin</MenuItem>
            <MenuItem value={"C"}>Celsius</MenuItem>
            <MenuItem value={"F"}>Fahrenheit</MenuItem>
          </Select>
        </FormControl>
        <SearchBar
          handleSearchValue={handleSearchValue}
          searchValue={searchValue}
          handleData={handleData}
          data={data}
          handleLocation={handleLocation}
        />

        <Tabs
          value={false}
          sx={{ color: "white" }}>
          <Tab
            value={1}
            sx={{ color: "inherit" }}
            label="Home"
          />
          <Tab
            value={2}
            sx={{ color: "inherit" }}
            label="About"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
