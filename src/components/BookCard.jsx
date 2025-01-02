import { Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import defaultImage from "../assets/cover_not_found.jpg";

const BookCard = ({ book }) => {
  const { id, volumeInfo } = book;
  const {
    title = "Untitled",
    authors = ["Unknown Author"],
    description = "No description available.",
    imageLinks,
  } = volumeInfo;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={imageLinks?.thumbnail || defaultImage}
        alt={`Cover of the book: ${title}`}
        sx={{
          height: 200,
          width: "100%",
          objectFit: "contain",
          backgroundColor: "#f5f5f5",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      />

      {/* Content */}
      <CardContent sx={{ flex: "1 0 auto", paddingBottom: 0 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "8px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ marginBottom: "8px" }}
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
            WebkitLineClamp: 2, // Limit to 2 lines
            WebkitBoxOrient: "vertical",
            marginBottom: "8px",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Actions: Save Icon and View More */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        {/* Save Icon */}
        <BookmarkBorderIcon sx={{ cursor: "pointer", color: "gray" }} />

        {/* View More Button */}
        <Link to={`/book/${id}`} style={{ textDecoration: "none" }}>
          <Typography
            variant="button"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
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
