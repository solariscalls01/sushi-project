import * as React from "react";
import Image from "next/image";
import { Typography, Box, Link } from "@mui/material";

export default function HomepageMap() {
  return (
    <div className="section" style={{
      width: "70%",
      margin: "auto",
    }}>
      {/* Section to create the left area for the image */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", sm: "row"},
          alignItems: "center",
          padding: 2,

        }}
      >
        <Box sx={{ width: "80%", display: "flex", justifyContent: "center" }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.bing.com/search?pglt=673&q=Adress%3A+5963+Corson+Ave+S+Ste+194%2C+Seattle%2C+WA+98108&cvid=14061f21201e4352bb74549038244a15&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHOTUwajBqMagCALACAA&FORM=ANNTA1&PC=W099"
          >
            <Image
              src="/images/daimonji-map.png"
              alt="Alex with his family"
              width={350}
              height={200}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                minWidth: "150px",
              }}
            />
          </Link>
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
          <Typography variant="h4" component="h2" sx={{ color: "white", fontSize: {xs: "1.3rem", sm: "1.5rem"}, textAlign: {xs:"center", sm: "left"}, padding: {xs:"0.8rem", sm: "0rem"} }}>
            Business Hours
          </Typography>

          {/* Small Text Box */}
          <Typography variant="body2" sx={{ color: "white", fontSize: {xs: "1rem", sm: "1.25rem"}, }}>
            Monday - Friday: 11:00am - 2pm; 5:00pm - 9:00pm
          </Typography>
          <Typography variant="body2" sx={{ color: "white", fontSize: {xs: "1rem", sm: "1.25rem"}, }}>
            Saturday: 5:00pm - 9:00pm Sunday: CLOSED
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
