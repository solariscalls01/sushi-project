'use client'
import { CardMedia } from "@mui/material";
import { usePathname } from "next/navigation";

export default function BackgroundImg() {

  // conditionals to load different images based off specific webpages
  const pathname = usePathname();

  let image;

  console.log(pathname)
  switch (pathname){
    case "/":
      image = "/images/homepage-1.jpg";
      break;
    case "/about":
      image = "/images/uni.jpg";
      break;
    case "/contact":
      image = "/images/homepage-5.jpg";
      break;
    case "/menu":
      image = "/images/homepage-5.jpg";
      break;
    case "/menu/appetizers":
      image = "/images/appetizers/gyoza.jpg"
      break;
    case "/menu/chirashi":
      image = "/images/chirashi/Deluxe-bowl.jpg";
      break;
    case "/menu/drinks":
      image = "/images/drink/lemonade-apple.jpg";
      break;
    case "/menu/noodles":
      image = "/images/tonkatsu-ramen.png";
      break;
    case "/menu/signature-combos":
      image = "/images/homepage-2.jpg";
      break;
    case "/menu/sushi":
      image = "/images/roll/spicy-tuna.jpg";
      break; 
    default:
      image = "/images/homepage-1.jpg";
      break;
  }

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }>
        <CardMedia
          component="img"
          src={image}
          sx={{
            padding: "1.5rem",
            borderRadius: "2rem",
            // maxWidth: "1500px",
            maxHeight: 400,
            width: "100%",
            height: "auto",
            objectFit: "scale-down",
          }}
        />
      {/* </Card> */}

    </div >
  );
}
