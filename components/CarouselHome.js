import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

export default function CarouselImage() {

const imageCarousel = [
  "/images/homepage-1.jpg",
  "/images/homepage-2.jpg",
  "/images/homepage-3.jpg",
  "/images/homepage-4.jpg",
  "/images/homepage-5.jpg",
]

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
          component="img"
          src="/images/uni.jpg"
          sx={{
            padding:"1.5rem",
            borderRadius:"2rem",
            maxWidth:"500px",
            maxHeight:400,
            // width: "100%",
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
