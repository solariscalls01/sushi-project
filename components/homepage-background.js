'use client'
import { CardMedia } from "@mui/material";
import { usePathname } from "next/navigation";

export default function BackgroundImg() {

  // conditionals to load different images based off specific webpages
  const pathname = usePathname();

  let image;
  let altText;

  console.log(pathname)
  switch (pathname) {
    case "/":
      image = "/images/homepage-1.jpg";
      altText = "Image of Sushi Platter"
      break;
    case "/togo":
      image = "/images/togo-image.jpg";
      altText = "Various Sushi and Sashimi"
      break;
    case "/about":
      image = "/images/uni.jpg";
      altText = "Alex holding Uni"
      break;
    case "/contact":
      image = "/images/homepage-5.jpg";
      altText = "Various Sushi on a plate"
      break;
    case "/menu":
      image = "/images/homepage-5.jpg";
      altText = "Various Sushi on a plate"
      break;
    case "/menu/appetizers":
      image = "/images/appetizers/gyoza.jpg"
      altText = "Picture of a Gyoza Plate"
      break;
    case "/menu/chirashi":
      image = "/images/chirashi/Deluxe-bowl.jpg";
      altText = "Image of the Deluxe Chirashi bowl"
      break;
    case "/menu/drinks":
      image = "/images/drink/lemonade-apple.jpg";
      altText = "Image of lemonade and apple juice"
      break;
    case "/menu/bento":
      image = "/images/bento/o.jpg";
      altText = "Image of a bento combo"
      break;

    case "/menu/noodles":
      image = "/images/tonkatsu-ramen.png";
      altText = "Image of a Tonkatsu ramen bowl"
      break;
    case "/menu/signature-combos":
      image = "/images/homepage-2.jpg";
      altText = "Various Sushi on a plate"
      break;
    case "/menu/sushi":
      image = "/images/roll/spicy-tuna.jpg";
      altText = "Image of a spicy-tuna roll"
      break;
    default:
      image = "/images/homepage-1.jpg";
      altText = "Image of Sushi Platter"
      break;
  }

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5.5rem"
      }
    }>
      <CardMedia
        component="img"
        src={image}
        alt={altText}
        sx={{
          mt: "2rem",
          padding: "1.5rem",
          maxHeight: 400,
          width: "350px",
          height: "300px",
          objectFit: "scale-down",
        }}
      />
    </div >
  );
}
