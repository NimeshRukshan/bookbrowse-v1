import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import pageNotFoundImage from "../assets/page-not-found.png";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "background.default",
        padding: 2,
      }}
    >
      <img
        src={pageNotFoundImage}
        alt="Page Not Found"
        style={{ maxWidth: "400px", marginBottom: "20px" }}
      />
      <Typography variant="h3" color="primary" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Oops! The page you are looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ mt: 3 }}
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
