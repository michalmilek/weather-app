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

const MainContent = ({ data }: any) => {
  if (Object.keys(data).length !== 0) {
    const { name, state, local_names, country, lat, lon } = data[0];
  }
  const today = new Date();
  return (
    <Box
      sx={{
        minHeight: "1080px",
        marginTop: "50px",
        maxWidth: "100vw",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${Image1})`,
      }}>
      <Typography
        variant="h1"
        align="center"
        sx={{ color: "white", zIndex: 10, fontSize: "90px", mt: "30px" }}>
        London, UK
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: "gold", fontSize: "20px" }}>
        {today.toLocaleDateString("en-GB", options)}
      </Typography>
    </Box>
  );
};

export default MainContent;
