import { Box, colors, Tab, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { object, weatherTest } from "../data/test";
import { useEffect, useRef, useState } from "react";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
  location: any;
  setLocation: any;
  weather: any;
  setWeather: any;
  currentTemp: any;
  setCurrentTemp: any;
}

const Navbar = ({
  searchValue,
  setSearchValue,
  data,
  setData,
  location,
  setLocation,
  weather,
  setWeather,
  currentTemp,
  setCurrentTemp,
}: Props) => {
  const productionBuild = true;
  const [searchOn, setSearchOn] = useState(false);
  const completeRef = useRef<HTMLDivElement>();

  useEffect(() => {
    let handler = (e: any) => {
      if (completeRef.current) {
        if (!completeRef.current.contains(e.target)) {
          setSearchOn(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
        );
        console.log(response);
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    //getWeather();
    setWeather(weatherTest);
    console.log(weather);
  }, [location, setWeather, weather]);

  useEffect(() => {
    console.log(searchOn);
  }, [searchOn]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

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

        <Box sx={{ minWidth: "400px", position: "relative" }}>
          <TextField
            id="search-bar"
            className="text"
            autoComplete="off"
            value={searchValue}
            onFocus={() => setSearchOn(true)}
            onChange={(e) => {
              setSearchValue(e.target.value);
              searchValue.length >= 2 &&
                (productionBuild ? setData(object.data) : getData());
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
              productionBuild ? setData(object.data) : getData();
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
                    onClick={() =>
                      setLocation({
                        lat: item.lat,
                        lon: item.lon,
                        name: item.name,
                        country: item.country,
                        state: item.state,
                      })
                    }
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

        <Tabs sx={{ color: "white" }}>
          <Tab
            sx={{ color: "inherit" }}
            label="Home"
          />
          <Tab
            sx={{ color: "inherit" }}
            label="About"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
