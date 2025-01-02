import {
  Box,
  Typography,
  InputBase,
  IconButton,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import headerImage from "../assets/header-image.png";

const HeroSection = ({ onSearch }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: { xs: "auto", md: "100vh" },
        padding: { xs: theme.spacing(2.5), md: 0 },
        backgroundImage: { xs: "none", md: `url(${headerImage})` },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: theme.typography.fontWeightBold,
          marginBottom: theme.spacing(2),
          color: theme.palette.primary.main,
        }}
      >
        Find Your Book of Choice.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: theme.spacing(3),
          color: theme.palette.text.primary,
        }}
      >
        Discover your next favorite read with us.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1),
          width: { xs: "100%", sm: "80%", md: "50%" },
          boxShadow: theme.shadows[2],
          gap: theme.spacing(1),
        }}
      >
        <InputBase
          placeholder="Search for title, author, topic, or genre"
          sx={{
            flexGrow: 1,
            paddingLeft: theme.spacing(1),
            fontSize: { xs: "14px", sm: "16px" },
          }}
          onKeyDown={(e) => e.key === "Enter" && onSearch(e.target.value)}
        />
        <IconButton
          sx={{ padding: { xs: theme.spacing(0.5), sm: theme.spacing(1.25) } }}
          onClick={(e) => {
            const inputElement = e.currentTarget.previousSibling;
            if (inputElement?.value) {
              onSearch(inputElement.value);
            }
          }}
        >
          <SearchIcon sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HeroSection;
