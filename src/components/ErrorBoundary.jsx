import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/error-image.png"; // Optional error image

const ErrorBoundary = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 4,
        backgroundColor: "background.default",
      }}
    >
      <Box
        component="img"
        src={errorImage}
        alt="Error Illustration"
        sx={{
          width: "100%",
          maxWidth: 300,
          height: "auto",
          marginBottom: 3,
        }}
      />
      <Typography
        variant="h4"
        color="error"
        fontWeight="bold"
        sx={{ marginBottom: 2 }}
      >
        Oops! Something went wrong.
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginBottom: 3 }}
      >
        We couldn't load the page you're looking for.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ paddingX: 3, paddingY: 1 }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default ErrorBoundary;
