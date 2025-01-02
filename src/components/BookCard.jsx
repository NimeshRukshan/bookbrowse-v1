import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import defaultImage from "../assets/cover_not_found.jpg";
import { toast } from "react-toastify";
const BookCard = ({ book }) => {
  const theme = useTheme();
  const { id, volumeInfo } = book;
  const {
    title = "Untitled",
    authors = ["Unknown Author"],
    description = "No description available.",
    imageLinks,
  } = volumeInfo;

  const handleSaveClick = () => {
    toast.info("This feature is coming soon...");
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        "&:hover": {
          boxShadow: theme.shadows[3],
        },

        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        component="img"
        src={imageLinks?.thumbnail || defaultImage}
        alt={`Cover of the book: ${title}`}
        sx={{
          height: 200,
          width: "100%",
          objectFit: "contain",
          backgroundColor: theme.palette.background.default,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        }}
      />
      <CardContent sx={{ flex: "1 0 auto", paddingBottom: 0 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: theme.spacing(1),
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ marginBottom: theme.spacing(1) }}
        >
          {authors.join(", ")}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            marginBottom: theme.spacing(1),
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: theme.spacing(1),
        }}
      >
        <BookmarkBorderIcon
          sx={{
            cursor: "pointer",
            color: theme.palette.text.secondary,
          }}
          onClick={handleSaveClick}
        />
        <Link to={`/book/${id}`} style={{ textDecoration: "none" }}>
          <Typography
            variant="button"
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.primary.main,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            View More
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default BookCard;
