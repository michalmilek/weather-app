import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const FavouriteCities = () => {
  const [cities, setCities] = useState(() => {
    const savedItem = localStorage.getItem("Cities");
    const parsedItem = JSON.parse(savedItem || "");
    return parsedItem;
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("Cities", JSON.stringify(cities));
  }, [cities]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "60px",
      }}>
      <Typography
        sx={{
          color: "white",
        }}
        variant="h3">
        Favourite Cities
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCities([...cities, input]);
            }
          }}
        />
        {cities.length !== 0 ? (
          cities?.map((city: string, index: number) => (
            <>
              <Typography
                variant="h4"
                sx={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "20px",
                }}>
                {city}
              </Typography>
              <Typography>&times;</Typography>
            </>
          ))
        ) : (
          <Typography
            variant="h4"
            sx={{
              cursor: "pointer",
              color: "white",
              fontWeight: 600,
              fontSize: "20px",
            }}>
            Add your favourite city/cities
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FavouriteCities;
