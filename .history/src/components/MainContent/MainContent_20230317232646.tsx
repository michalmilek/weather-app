import React from "react";
import Box from "@mui/material/Box";
import Image1 from "./Image1.jpg";
import Typography from "@mui/material/Typography";

interface Props {
  data: any;
  setData: any;
}

const MainContent = ({ data, setData }: Props) => {
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
      {/*       <img
        src={Image1}
        alt="background"
      /> */}
    </Box>
  );
};

export default MainContent;
