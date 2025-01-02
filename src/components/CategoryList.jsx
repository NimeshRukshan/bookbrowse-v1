import { Box, Chip, useTheme } from "@mui/material";

const CategoryList = ({ categories, onCategoryClick, activeCategory }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        gap: theme.spacing(1),
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: theme.spacing(1),
        "&::-webkit-scrollbar": {
          height: theme.spacing(1),
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.divider,
          borderRadius: theme.shape.borderRadius,
        },
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => onCategoryClick(category)}
          color={activeCategory === category ? "primary" : "default"}
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
      ))}
    </Box>
  );
};

export default CategoryList;
