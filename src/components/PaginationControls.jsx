import { Box, Button, useTheme } from "@mui/material";

const PaginationControls = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(2.5),
        gap: theme.spacing(2),
      }}
    >
      <Button
        variant="outlined"
        onClick={onPrevious}
        disabled={currentPage === 1}
        sx={{
          padding: theme.spacing(1, 2),
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
          "&:hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          },
        }}
      >
        Previous
      </Button>
      <Button
        variant="outlined"
        onClick={onNext}
        disabled={currentPage === totalPages}
        sx={{
          padding: theme.spacing(1, 2),
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
          "&:hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
          },
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default PaginationControls;
