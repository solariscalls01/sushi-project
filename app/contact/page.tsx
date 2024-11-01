import * as React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Typography } from "@mui/material";
import BackgroundImg from "../../components/homepage-background"
export default function Page() {
  return (
    <div>
      <NavBar />
      <BackgroundImg />
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Follow us on facebook to take a look at some of the specials we have for the week!


      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
        <strong>Business Hours</strong>:
      </Typography>
      <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
        Monday - Friday: 11:00am - 2pm; 5:00pm - 9:00pm
      </Typography>
      <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
        Saturday: 5:00pm - 9:00pm
      </Typography>
      <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
        Sunday: <strong>CLOSED</strong>
      </Typography>
      <Footer />
    </div>
  );
}
