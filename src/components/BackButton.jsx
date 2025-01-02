import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = ({ label = "Back", to = "/" }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(to)}
      sx={{
        color: "primary.main",
        fontWeight: 600,
        textTransform: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default BackButton;
