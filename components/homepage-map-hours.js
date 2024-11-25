import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography, Box, Link } from "@mui/material";

export default function HomepageMap() {

  return (
    <div className="section" style={{
      width: "70%",
      margin: "auto",
      borderRadius: "10px"
    }}>
        {/* Section to create the left area for the image */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: 2,
            background: "#b8011f",
            borderRadius: "10px"
          }}
        >
          <Box sx={{ width: "80%", display: "flex", justifyContent: "center" }}>
            {/* <Typography variant="body2" sx={{ textAlign: "center", justifyContent: "center", color: "#fff" }}>5963 Corson Ave S, Seattle, WA 98108</Typography> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.bing.com/search?pglt=673&q=Adress%3A+5963+Corson+Ave+S+Ste+194%2C+Seattle%2C+WA+98108&cvid=14061f21201e4352bb74549038244a15&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEHOTUwajBqMagCALACAA&FORM=ANNTA1&PC=W099"
            >
              <ImageList sx={{ width: "auto", borderRadius: "10px", overflow: "hidden" }} >
                <ImageListItem>
                  <img
                    srcSet="/images/daimonji-map.jpg"
                    alt="Map of location of the restaurant"
                    width={350}
                    height={300}
                    loading='lazy'
                    style={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                  />
                  <ImageListItemBar title="5963 Corson Ave S, Seattle 98108" position='below' sx={{
                    textAlign: "center",
                    background: "none",
                    color: "#FFF",
                    fontWeight: "bold",
                    fontSize: "6px",
                  }} />
                </ImageListItem>
              </ImageList>
            </Link>
          </Box>

          {/* Section for creating right side with NavBar and paragraph */}
          <Box
            sx={{
              flex: "1 1 50%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Title */}
            <Typography variant="h4" component="h2" sx={{ color: "white", fontSize: { xs: "1.1rem", sm: "1.3rem" }, textAlign: { xs: "center", sm: "left" }, padding: { xs: "0.8rem", sm: "0rem" } }}>
              Business Hours
            </Typography>

            {/* Small Text Box */}
            <Typography variant="body2" sx={{ color: "white", fontSize: { xs: "0.9rem", sm: "1.0rem" }, }}>
              Monday - Friday: 11:00am - 2pm; 5:00pm - 9:00pm
            </Typography>
            <Typography variant="body2" sx={{ color: "white", fontSize: { xs: "0.9rem", sm: "1.0rem" }, }}>
              Saturday: 5:00pm - 9:00pm Sunday: CLOSED
            </Typography>
          </Box>
        </Box>
    </div>
  );
}
