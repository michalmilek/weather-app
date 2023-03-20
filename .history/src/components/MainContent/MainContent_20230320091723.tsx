import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";

interface Options {
  day: "numeric";
  year: "numeric";
  month: "short";
}

const options: Options = {
  day: "numeric",
  year: "numeric",
  month: "short",
};

const MainContent = ({ data, location, weather }: any) => {
  /*   console.log(Object.keys(data).length !== 0);
  if (Object.keys(data).length !== 0) {
    const { name, state, local_names, country, lat, lon } = data[0];

  } */
  const today = new Date();
  return (
    <>
      <Box
        sx={{
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
          <Box>
            <Typography>Temperature: {weather.data.main.temp}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MainContent;
