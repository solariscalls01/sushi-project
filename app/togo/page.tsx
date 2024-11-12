import * as React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Typography from "@mui/material/Typography";
import BackgroundImg from "../../components/homepage-background"
import BusinessHours from "../../components/buisness-hours"
import { Box, Button } from "@mui/material";
import Link from '@mui/material/Link';
export default function Page() {
  return (
    <div>
      <NavBar />
      <BackgroundImg />
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Follow us on <span><Link href="https://www.facebook.com/Daimonjisushi/" color="#3594e8" underline="hover" >
            {"Facebook"}
          </Link></span> to take a look at some of the specials we have for the week!
      </Typography>
      <BusinessHours />
      {/* Section for Menu Button */}
      <Box sx={{
        padding: "1rem",
        borderRadius: "10px",
        width: { xs: "100%", sm: "90%", md: "80%", lg: "45%" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "0 auto"
      }}>
        <Button variant="contained" href="/menu.pdf" target="_blank" >View To Go Menu</Button>
      </Box>

      {/* Statement Section with Phone # */}
      <Box sx={{
        padding: "1rem",
        borderRadius: "10px",
        width: { xs: "100%", sm: "90%", md: "80%", lg: "45%" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "0 auto"
      }}>
        <Typography variant="h6" >
          Each sushi order is freshly prepared and ready for pickup when you arrive.
          Takeout is available from 5:00 PM to 9:00 PM, with orders placed at least 30 minutes in advance.
          Guests can order by calling: <Link href="tel:+1(206)762-7820" variant="h6" color="#fb0002" underline="hover" >
            {"(206)762-7820"}
          </Link>
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}
