import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { toast } from "react-toastify";
import defaultErrorImage from "../assets/error-image.png";

const ErrorComponent = ({
  message,
  onRetry,
  retryMessage = "Retrying...",
  image = defaultErrorImage,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
      toast.info(retryMessage, { icon: "🔄" });
    } else {
      toast.warn("No retry function provided", { icon: "⚠️" });
    }
  };

  return (
    <Box
      sx={{
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: theme.spacing(3),
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Error"
        sx={{
          width: isMobile ? "80%" : "100%",
          maxWidth: 300,
          height: "auto",
        }}
      />
      <Typography
        variant={isMobile ? "h5" : "h4"}
        color="error"
        fontWeight="bold"
      >
        Oops! Something went wrong.
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
      >
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleRetry}
          sx={{
            paddingX: theme.spacing(3),
            paddingY: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            fontSize: isMobile ? "0.875rem" : "1rem",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Retry
        </Button>
      )}
    </Box>
  );
};

export default ErrorComponent;
