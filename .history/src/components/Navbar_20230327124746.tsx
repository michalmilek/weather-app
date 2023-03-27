import {
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Tab,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  CurrentTempType,
  getData,
  LocationInterface,
  LocationResponseInterface,
} from "../utils/fetchingData";
import SearchBar from "./SearchBar";
import useDebounce from "../hooks/useDebounce";
import useSearchLocation from "../hooks/useSearchLocation";

interface Props {
  location: LocationInterface | null;
  handleLocation: (clickedLocation: LocationInterface) => void;
  currentTemp: CurrentTempType;
  handleCurrentTemp: (temp: CurrentTempType) => void;
}

const Navbar = ({
  location,
  handleLocation,
  currentTemp,
  handleCurrentTemp,
}: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (search: string) => {
    setSearchValue(search);
  };

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const { data: fetchedData } = useSearchLocation(debouncedSearchValue);

  useEffect(() => {
    console.log(location);
  }, [location]);

  /* useEffect(() => {
    const fetchData = async () => {
      handleData((await getData(searchValue)) as LocationResponseInterface[]);
    };

    searchValue.length >= 3 && fetchData();
  }, [searchValue, handleData]);

  useEffect(() => {
    const fetchWeather = async () => {
      handleWeather(
        (await getWeather(
          location!.lat,
          location!.lon,
          currentTemp
        )) as CurrentWeatherInterface
      );
    };
    setLoading(true);
    fetchWeather();
    setLoading(false);
  }, [location, currentTemp, handleWeather, setLoading]); */

  return (
    <AppBar
      sx={{
        padding: "0 400px 0 20px",
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
        <Link
          sx={{
            textDecoration: "none",
            color: "white",
          }}
          href={"/"}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              userSelect: "none",
              textDecoration: "none",
            }}>
            <AcUnitIcon
              sx={{
                transform: "rotate(45deg)",
              }}
            />{" "}
            WeatherApp
          </Typography>
        </Link>

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
          fetchedData={fetchedData as LocationResponseInterface[] | null}
          handleSearchValue={handleSearchValue}
          searchValue={searchValue}
          handleLocation={handleLocation}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;