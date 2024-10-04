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
            style={{ borderRadius: '10px' }}
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
          <Typography variant="h4" component="h2">
            Our Story
          </Typography>

          {/* Small Text Box */}
          <Typography variant="body1" sx={{ width: "100%" }}>
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
      <Box sx={{ backgroundColor: '#b8011f', padding: '2px'}}>
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
            <Typography variant="h4" component="h2" sx={{color: '#fff'}}>
              Daimonji's Philosophy
            </Typography>

            {/* Small Text Box */}
            <Typography variant="body1" sx={{ width: "100%", color: '#fff' }}>
              Our philosophy centers around crafting memorable dining experiences by combining the finest ingredients with meticulous attention to detail.
              We believe in creating dishes that celebrate tradition while embracing innovation, ensuring every meal is both authentic and exciting.
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 50%" }}>
            <Image
              src="/images/our-philosophy.jpg"
              alt="Alex with his family"
              width={'400'}
              height={300}
              style={{ borderRadius: '10px' }}
            />
          </Box>

          {/* Section for creating right side with NavBar and paragraph */}

        </Box>
      </Box>

      {/* Section for yelp reviews */}
      <Box display={'flex'} justifyContent={'center'} sx={{backgroundColor: '#fcfaee'}}>
        <Typography variant="h3" >
          Testimonials
        </Typography>
        
      </Box>
      <Footer />
    </div>
  );
}
