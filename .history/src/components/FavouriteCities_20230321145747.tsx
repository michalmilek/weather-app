import { Box } from "@mui/material";
import React, { useState } from "react";

const FavouriteCities = () => {
  const [cities, setCities] = useState(["Oslo", "Paris", "Kraków"]);
  return <Box>FavouriteCities</Box>;
};

export default FavouriteCities;
