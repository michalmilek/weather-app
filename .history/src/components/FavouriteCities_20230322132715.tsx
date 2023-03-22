import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const FavouriteCities = () => {
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
              <Typography
                onClick={() => {
                  const elementToRemove = cities[index];
                  setCities((prevState: string[]) =>
                    prevState.filter(
                      (element: string) => element !== elementToRemove
                    )
                  );
                }}
                variant="h4"
                sx={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "20px",
                }}>
                &times;
              </Typography>
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
