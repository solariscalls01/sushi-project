import { CardMedia } from "@mui/material";

export default function BackgroundImg() {

  return (
    <div style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }>
      {/* <Card
        sx={{

          justifyContent: "center",
          textAlign: "center",
          width: "70%",
          height: "50%",

        }}
      > */}
        <CardMedia
          component="img"
          src="/images/homepage-1.jpg"
          sx={{
            padding: "1.5rem",
            borderRadius: "2rem",
            maxWidth: "1000px",
            maxHeight: 400,
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      {/* </Card> */}

    </div >
  );
}
