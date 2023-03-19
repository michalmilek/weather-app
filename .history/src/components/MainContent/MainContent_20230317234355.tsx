import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";


const MainContent = ({ data }: any) => {
  const { name, state, local_names, country, lat, lon } = data[0];
  console.log(name);
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
        {name}
      </Typography>
    </Box>
  );
};

export default MainContent;
