import { createTheme, ThemeProvider, colors, CssBaseline } from "@mui/material";

const ShopTheme = ({ children }) => {
  const shopTheme = createTheme({
    palette: {
      primary: {
        main: colors.brown[700],
      },
    },

    typography: {
      body2: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        fontWeight: 400,
        fontSize: "0.85rem",
        lineHeight: 1.43,
        letterSpacing: "0.015em",
      },
      body3: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        fontWeight: 400,
        fontSize: "0.500rem",
        lineHeight: 1.3,
        letterSpacing: "0.02em",
      },
    },
  });

  return (
    <ThemeProvider theme={shopTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ShopTheme;
