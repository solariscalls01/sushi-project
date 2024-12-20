import * as React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import HomepageMap from "../components/homepage-map-hours";
import MenuImageList from "../components/homepage-images";
import BackgroundImg from "../components/homepage-background";
import { Box, Typography, Link, Divider } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Header />
      <BackgroundImg />
      <Typography
        variant="h2"
        textAlign="center"
        justifyContent="center"
        sx={{ pb: "3rem", color: "black" }}
      >
        Welcome to Daimonji Sushi!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",    
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            pb: "3rem",
            width: "50%",
            textAlign: "center",
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          Welcome to Daimonji, where tradition meets innovation in every dish. Our
          passion for crafting the finest sushi is at the heart of everything we
          do. Using only the freshest ingredients, we bring you an authentic dining
          experience that celebrates the art of sushi. Whether you&apos;re here for
          a quick bite or a special celebration, we invite you to savor our
          delicious creations in a warm and inviting atmosphere. Join us and
          experience the true taste of Japan!
        </Typography>
        <Divider sx={{ width: "40%", mb: "1rem", height:"1px", backgroundColor:"#F5F7F8" }} />
        <Typography
          variant="h6"
          sx={{
            paddingTop: "1.1rem",
            color: "black",
            fontSize: "1.4rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom:"2rem"
          }}
        >
          Make a reservation by calling:{" "}
          <Link
            href="tel:+1(206)762-7820"
            variant="h6"
            color="#fb0002"
            underline="hover"
          >
            {"(206)762-7820"}
          </Link>
        </Typography>
      </Box>
      <HomepageMap />
      <MenuImageList />
      <Footer />
    </div>
  );
}
