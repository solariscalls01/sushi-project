import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

// VIDEO IS ONLY SAMPLE VIDEO. NOT TAKEN FROM RESTAURANT
export default function BackgroundVideo() {
  return (
    <div>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: "30%",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="video"
          src="/videos/background-home.mp4"
          autoPlay
          loop
          muted
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        {/* <Typography
                    variant="h6"
                    component="div"
                    sx={{ position: 'absolute', bottom: 5, left: 10, color: 'white', padding: '5px' }}
                >
                    DAIMONJI SUSHI
                </Typography> */}
      </Card>
    </div>
  );
}
