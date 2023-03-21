import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const FavouriteCities = () => {
  const [cities, setCities] = useState(["Oslo", "Paris", "Kraków"]);
  return (
    <Box>
      {cities.map((city: string) => (
        <Typography>{city}</Typography>
      ))}
    </Box>
  );
};

export default FavouriteCities;
