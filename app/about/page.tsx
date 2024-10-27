import * as React from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Typography, Box } from "@mui/material";

export default function Page() {
  return (
    <div>
      <NavBar />
      {/* Section to create the left area for the image */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          my: 4,
          mx: "auto",
          maxWidth: "1200px",
        }}
      >
        <Box sx={{ flex: "1 1 50%" }}>
          <Image
            src="/images/our-story.jpg"
            alt="Alex with his family"
            width={350}
            height={200}
            style={{ borderRadius: "10px" }}
          />
        </Box>

        {/* Section for creating right side with NavBar and paragraph */}
        <Box
          sx={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontFamily: "Lobster" }}
          >
            Our Story
          </Typography>

          {/* Small Text Box */}
          <Typography
            variant="body1"
            sx={{ width: "100%", fontFamily: "Noto" }}
          >
            Our journey began as a simple dream fueled by a shared love for
            sushi and the desire to bring authentic Japanese flavors to our
            community. As more customers discovered us and word of mouth spread,
            we realized that we were not just serving sushi—we were building a
            place where people could gather, share stories, and savor something
            truly special.
          </Typography>
        </Box>
      </Box>

      {/* Philosophy section */}
      <Box sx={{ backgroundColor: "#b8011f", padding: "2px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            my: 4,
            mx: "auto",
            maxWidth: "1200px",
          }}
        >
          <Box
            sx={{
              flex: "1 1 50%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: "#fff", fontFamily: "Lobster" }}
            >
              Daimonji&apos;s Philosophy
            </Typography>

            {/* Small Text Box */}
            <Typography
              variant="body1"
              sx={{ width: "100%", color: "#fff", fontFamily: "Noto" }}
            >
              Our philosophy centers around crafting memorable dining
              experiences by combining the finest ingredients with meticulous
              attention to detail. We believe in creating dishes that celebrate
              tradition while embracing innovation, ensuring every meal is both
              authentic and exciting.
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 50%" }}>
            <Image
              src="/images/our-philosophy.jpg"
              alt="Alex with his family"
              width={"400"}
              height={300}
              style={{ borderRadius: "10px" }}
            />
          </Box>

          {/* Section for creating right side with NavBar and paragraph */}
        </Box>
      </Box>

      {/* Section for yelp reviews */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ backgroundColor: "#fcfaee", padding: 4 }}
      >
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          Testimonials
        </Typography>
        {/* Section for yelp reviews dividing image on left and text on right  */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          sx={{
            maxWidth: "1200px",
            border: "0.5px solid black",
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <Box sx={{ flex: 1, padding: 2, backgroundColor: "#fff" }}>
            {/* Image for yelp reviews */}
            <Typography>Test</Typography>
          </Box>
          <Box sx={{ width: "1px", backgroundColor: "black" }} />
          <Box sx={{ flex: 1, padding: 2, backgroundColor: "#fff" }}>
            {/* Section to add the Yelp API for dynamic reviews */}
            <Typography>Reviews</Typography>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
}
