"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp } from "@fortawesome/free-brands-svg-icons";
import DaimonjiLogo from './Daimonji-logo'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <footer style={{
      width: "70%",
      margin: "auto",
      borderRadius:"10px"
    }}>
      <Box sx={{ bgcolor: "#B8001F", color: "#fff", p: 2, borderRadius:"10px" }}>
        {/* Contact Information - Top Left */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
            Contact Us:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
            <Link href="tel:+1(206)762-7820" underline="hover" color="#fff">
              {"tel:+1(206)762-7820"}
            </Link>
          </Typography>
          {/*
                    When you use target="_blank" with Links, it is recommended to always set rel="noopener" or rel="noreferrer" when linking to third party content.
                    rel="noopener" prevents the new page from being able to access the window.opener property and ensures it runs in a separate process. Without this, the target page can potentially redirect your page to a malicious URL.
                    rel="noreferrer" has the same effect, but also prevents the Referer header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.
                     */}
          <Typography variant="body2" mb={3} sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bing.com/search?pglt=673&q=Adress%3A+5963+Corson+Ave+S+Ste+194%2C+Seattle%2C+WA+98108&cvid=14061f21201e4352bb74549038244a15&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHOTUwajBqMagCALACAA&FORM=ANNTA1&PC=W099"
              underline="hover"
              color="#fff"
            >
              {"5963 Corson Ave S, Seattle, WA 98108"}
            </Link>
          </Typography>
          {/* <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
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
          </Typography> */}
        </Box>

        {/* Social Media Icons - Centered Below Contact Info */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <BottomNavigation
            showLabels
            value={value}
            sx={{ backgroundColor: "transparent" }}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              target="_blank"
              rel="noopener noreferrer"
              icon={<GoogleIcon sx={{ fontSize: { xs: "1rem", sm: "2.25rem" }, color: "#fff" }} />}
              href="https://www.google.com/maps/place/Daimonji+Sushi+%26+Grill/@47.5476367,-122.3251621,16z/data=!3m1!5s0x549041c00151388b:0x35a6651a72e32613!4m8!3m7!1s0x549041eb31ada4cf:0x4dd9351c2b0914e5!8m2!3d47.5476331!4d-122.3225818!9m1!1b1!16s%2Fg%2F1tg5zb94?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D"
              sx={{
                color: "#fff",
                "&:hover": { color: "#fff" },
                "&:active": { color: "#fff" },
              }}
            />
            <BottomNavigationAction
              target="_blank"
              rel="noopener noreferrer"
              icon={
                <FontAwesomeIcon
                  style={{ fontSize: { xs: "1rem", sm: "2.25rem" }, color: "#fff" }}
                  icon={faYelp}
                />
              }
              href="https://www.yelp.com/biz/daimonji-japanese-restaurant-seattle"
            />
            <BottomNavigationAction
              target="_blank"
              rel="noopener noreferrer"
              icon={<FacebookIcon sx={{ fontSize: { xs: "1rem", sm: "2.25rem" }, color: "#fff" }} />}
              href="https://www.facebook.com/Daimonjisushi/"
            />
          </BottomNavigation>
        </Box>
        <DaimonjiLogo />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontSize: { xs: "0.5rem", sm: "1rem" }, }}>
            © 2024 Daimonji Sushi, Inc.
          </Typography>
        </Box>
      </Box>
    </footer >
  );
}
