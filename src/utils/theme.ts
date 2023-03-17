import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    background: {
      default: "#000",
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#673ab7",
    },
    info: {
      main: "#fff",
    },
    warning: {
      main: "#546e7a",
    },
  },
});
