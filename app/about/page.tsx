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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, my: 4, mx: 'auto', maxWidth: '1200px' }}>
        <Box sx={{ flex: '1 1 50%' }}>
          <Image
            src="/images/ShowLetter2.jpg"
            alt="Alex with his family"
            width={400}
            height={200}
          />
        </Box>

        {/* Section for creating right side with NavBar and paragraph */}
        <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Title */}
          <Typography variant="h4" component="h2">
            Our Story
          </Typography>

          {/* Small Text Box */}
          <Typography variant="body1" sx={{ width: '100%' }} >

            Our journey began as a simple dream fueled by a shared love for sushi and the desire to bring authentic Japanese flavors to our community. 
            As more customers discovered us and word of mouth spread, we realized that we were not
            just serving sushi—we were building a place where people could gather, share stories, and savor something truly special.
          </Typography>

        </Box>
      </Box>


      <Footer />
    </div>
  );
}
