import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#DDD087",
      contrastText: "#070707",
    },
    secondary: {
      main: "#070707", // custom button color (seafoam green)
      contrastText: "#FAFAFA", // custom button text (white)
    },
    error: {
      main: "#C6112E", // custom button color (red)
    },
  },
  typography: {
    fontFamily: ["Nunito Sans"].join(","),
  },
  h1: {
    fontFamily: "Nunito Sans",
  },
  h2: { fontFamily: "Nunito Sans" },
  h3: { fontFamily: "Nunito Sans" },
  h4: { fontFamily: "Nunito Sans" },
})

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          [theme.breakpoints.up("xl")]: {
            maxWidth: "1800px",
          },
          // Note that you can customize other properties here, like padding, color, .etc.
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
