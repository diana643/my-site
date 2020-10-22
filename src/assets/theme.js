import { createMuiTheme } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EAF0DE",
    },
    secondary: {
      light: "#F0DEDE",
      main: "#F0DEDE",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    h1: {
        margin: "20px 0 20px",
        fontSize: "45px",
        fontWeight: "300",
        textAlign: "center",
        fontFamily: "Raleway",
    },
    h2: {
      margin: "20px 0 20px",
      fontSize: "24px",
      fontWeight: "300",
      textAlign: "center",
      fontFamily: "Raleway",
    },
    h3: {
      fontSize: "18px",
      fontFamily: "Raleway",
    },
    h4: {
      fontSize: "15px",
      fontWeight: "300",
      fontFamily: "Raleway",
    },
  },
  brandColor: "#122352",
});

export default theme;