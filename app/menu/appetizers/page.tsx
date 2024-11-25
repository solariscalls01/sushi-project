import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from '@mui/material/Grid2';
import { db } from "@vercel/postgres";

// Get name, price, description, from db
const client = await db.connect();
const getAppetizerInfo = await client.sql`select name, price, description,image_url from appetizers`

// getAppetizerInfo.rows.map(item => {
//   console.log(`Name: ${item.name}, Price: ${item.price}, Descrption: ${item.description}, Image_URL: ${item.image_url}`)
// })

export default function Page() {
  const theme = createTheme();
  theme.spacing(24);



  return (
    <div style={{
      width: "80%",
      margin: "auto",
    }}>
      <Header />
      <BackgroundImg />
      <Typography variant="h3" sx={{ textAlign: "center", justifyContent: "center", pb: "2rem" }}>Appetizers</Typography>
      <NavLinksMenu />
      <Box sx={{ display: "flex", width: "100%", gap: 4, textAlign: "center", justifyContent: "center" }}>

        {/* Section for Menu items */}
        <Box sx={{ padding: 2 }}>
          <Box sx={{ border: "1px solid #FBFBFB", marginTop: 3, padding: 1 }}>

            {/* Using Grid component to create horizontal cards */}
            <Grid container spacing={12} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getAppetizerInfo.rows.map((item) => (
                <Card sx={{ width: { xs: "100%", sm: "99%", md: "99%" }, maxWidth: 400, padding: "0.5rem", border: "0.4px solid #FEF9F2", borderRadius: "10px" }} key={item.name}>
                  <CardActionArea sx={{ pointerEvents: "none" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image_url}
                      alt={`image of ${item.name}`}
                      sx={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain", borderRadius: "10px" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontWeight={200}
                        textAlign={"center"}
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={200}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        fontWeight={200}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
