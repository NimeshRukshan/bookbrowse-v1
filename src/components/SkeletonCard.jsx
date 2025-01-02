import { Card, CardContent, Skeleton } from "@mui/material";

const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" width="100%" height={140} />

      <CardContent>
        <Skeleton variant="text" width="80%" height={28} />

        <Skeleton variant="text" width="60%" height={20} />
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
