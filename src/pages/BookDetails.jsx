import { Box, Typography, Grid, CardMedia, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../services/bookApi";
import { useQuery } from "@tanstack/react-query";
import ErrorComponent from "../components/ErrorComponent";
import DOMPurify from "dompurify";
import BackButton from "../components/BackButton";
import defaultImage from "../assets/cover_not_found.jpg";
import SkeletonDetailsCard from "../components/SkeletonDetailsCard";
import { useState } from "react";

const MAX_DESCRIPTION_LENGTH = 300;

const BookDetails = () => {
  const { id } = useParams();
  const [isDescriptionTruncated, setIsDescriptionTruncated] = useState(true);
  const {
    data: book,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBookDetails(id),
    enabled: !!id,
  });

  if (isLoading) return <SkeletonDetailsCard />;
  if (error) {
    return (
      <ErrorComponent
        message="Failed to load book details."
        onRetry={refetch}
        retryMessage="Retrying to fetch book details..."
      />
    );
  }

  const { volumeInfo } = book || {};
  const sanitizedDescription = DOMPurify.sanitize(
    volumeInfo?.description || "Description not available."
  );
  const truncatedDescription =
    sanitizedDescription.length > MAX_DESCRIPTION_LENGTH
      ? `${sanitizedDescription.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : sanitizedDescription;

  const handleReadMoreToggle = () => {
    setIsDescriptionTruncated((prev) => !prev); // Toggle truncated state
  };

  return (
    <Box sx={{ mt: 2, px: 4, backgroundColor: "background.default" }}>
      <BackButton label="Back to Home" to="/" />

      <Grid container spacing={4} mt={3}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={volumeInfo?.imageLinks?.thumbnail || defaultImage}
            alt={volumeInfo?.title || "Book Cover"}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "shape.borderRadius",
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h2" gutterBottom>
            {volumeInfo?.title || "No Title Available"}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {volumeInfo?.authors?.join(", ") || "Unknown Author"}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: isDescriptionTruncated
                ? truncatedDescription
                : sanitizedDescription, // Show truncated or full description based on state
            }}
          />
          {sanitizedDescription.length > MAX_DESCRIPTION_LENGTH && (
            <Button
              variant="text"
              color="primary"
              onClick={handleReadMoreToggle}
            >
              {isDescriptionTruncated ? "Read More" : "Show Less"}
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetails;
