import { Box, Skeleton, Grid } from "@mui/material";

const SkeletonDetailsCard = () => (
  <Box
    sx={{
      mt: 4,
      px: { xs: 2, sm: 4 },
      backgroundColor: "background.default",
    }}
  >
    <Skeleton
      variant="text"
      height={50}
      sx={{ mb: 2, width: { xs: "70%", sm: "40%" } }}
    />
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Skeleton
          variant="rectangular"
          height={300}
          width="100%"
          sx={{ mb: 2, borderRadius: "shape.borderRadius" }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Skeleton
          variant="text"
          height={30}
          sx={{ mb: 1, width: { xs: "80%", sm: "60%" } }}
        />
        <Skeleton
          variant="text"
          height={20}
          sx={{ mb: 1, width: { xs: "90%", sm: "80%" } }} // Moved width to sx prop
        />
        <Skeleton variant="text" height={20} width="100%" />
      </Grid>
    </Grid>
  </Box>
);

export default SkeletonDetailsCard;
