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
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { object, weatherTest } from "../data/test";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { getData, getWeather } from "../utils/fetchingData";
import { debounce } from "lodash";

interface Props {
  searchValue: string;
  handleSearchValue: (search: string) => void;
  data: any;
  handleData: (response: any) => void;
  location: any;
  setLocation: any;
  weather: any;
  setWeather: any;
  currentTemp: any;
  setCurrentTemp: any;
}

const Navbar = ({
  searchValue,
  handleSearchValue,
  data,
  handleData,
  location,
  setLocation,
  weather,
  setWeather,
  currentTemp,
  setCurrentTemp,
}: Props) => {
  const productionBuild = true;
  const [searchOn, setSearchOn] = useState(false);
  const completeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (completeRef.current) {
        if (!completeRef?.current?.contains(e.target as Node)) {
          setSearchOn(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  /*   const synchroData = useMemo(
    () =>
      debounce(async () => {
        searchValue.length >= 3 && handleData(await getData(searchValue));
      }, 400),
    [searchValue, handleData]
  ); */

  /*         return () => {
          synchroData.cancel();
        }; */

        
        const handleAutoComplete = async () => {
          searchValue.length >= 3 && handleData(await getData(searchValue));
          console.log(data);
        };

        const synchroData = useCallback(() => {
          debounce(handleAutoComplete, 400);
        }, [handleAutoComplete, handleData, searchValue]);

        useEffect(() => {
          synchroData();
        }, [synchroData]);

  //debounce input

  /* useEffect(() => {
    getWeather(location.lat, location.lon, currentTemp);
    setWeather(weatherTest);
    console.log(weather);
  }, [location, setWeather, weather, currentTemp]); */

  useEffect(() => {
    console.log(searchOn);
  }, [searchOn]);

  /*   const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  }; */

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
            onChange={(e) => setCurrentTemp(e.target.value)}
            label="Unit">
            <MenuItem value={"K"}>Kelvin</MenuItem>
            <MenuItem value={"C"}>Celsius</MenuItem>
            <MenuItem value={"F"}>Fahrenheit</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ minWidth: "400px", position: "relative" }}>
          <TextField
            id="search-bar"
            className="text"
            autoComplete="off"
            value={searchValue}
            onFocus={() => setSearchOn(true)}
            onChange={(e) => {
              handleSearchValue(e.target.value);
            }}
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              width: "100%",
              height: "100%",
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
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              right: "2%",
              transform: "translate(0, -50%)",
            }}
            aria-label="search"
            onClick={() => {
              handleData(getData(searchValue));
            }}>
            <SearchIcon style={{ fill: "white" }} />
          </IconButton>
          {Object.keys(data).length !== 0 && searchOn && (
            <Box
              ref={completeRef}
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "100%",
                left: 0,
                background: "white",
                width: "100%",
                textAlign: "left",
                pt: 2,
              }}>
              {data?.map((item: any) => (
                <>
                  <Typography
                    /*      onClick={() =>
                      setLocation({
                        lat: item.lat,
                        lon: item.lon,
                        name: item.name,
                        country: item.country,
                        state: item.state,
                      })
                    } */
                    sx={{
                      pl: 3,
                      color: "black",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        background: "#24adf180",
                      },
                    }}
                    variant="body1"
                    paragraph>
                    {item.name}, {item.country}, {item.state}
                  </Typography>
                </>
              ))}
            </Box>
          )}
        </Box>

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
