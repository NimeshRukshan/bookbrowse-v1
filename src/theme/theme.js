import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#A3966A" },
    secondary: { main: "#7B8794" },
    background: { default: "#F5F5F5", paper: "#FFFFFF" },
    text: { primary: "#A3966A", secondary: "#555555" },
    divider: "#E0E0E0",
  },
  typography: {
    fontFamily: ["Roboto", "Playfair Display", "Poppins", "sans-serif"].join(
      ","
    ),
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#A3966A" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#A3966A" },
    h3: { fontSize: "1.75rem", fontWeight: 500, color: "#A3966A" },
    h4: { fontSize: "1.5rem", fontWeight: 500, color: "#A3966A" },
    h5: { fontSize: "1.25rem", fontWeight: 500, color: "#A3966A" },
    h6: { fontSize: "1rem", fontWeight: 500, color: "#A3966A" },
    body1: { fontSize: "1rem", lineHeight: 1.6, color: "#333333" },
    body2: { fontSize: "0.875rem", lineHeight: 1.5, color: "#555555" },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.12)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 3px 10px rgba(0, 0, 0, 0.15)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": { borderRadius: 8 },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { color: "#333333" },
      },
    },
  },
});

export default theme;
