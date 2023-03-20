import { Box, colors, Tab, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { object } from "../testing/test";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  setData: any;
}

const Navbar = ({ searchValue, setSearchValue, data, setData }: Props) => {
  const productionBuild = true;

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
              productionBuild ? console.log(object.data) : getData();
            }}>
            <SearchIcon style={{ fill: "white" }} />
          </IconButton>
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
