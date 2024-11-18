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

const client = await db.connect();
const getHandRollsInfo = await client.sql`select name, price, description, image_url from handrolls `
const getNigiriInfo = await client.sql`select name, price_nigiri, price_sashimi, image_url, market_price from nigiri `
const getRollsInfo = await client.sql`select name, price, description, image_url from rolls `
const getVeggieRollInfo = await client.sql`select name, price, description, image_url from veggieroll `

// getHandRollsInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price: ${item.price}, description: ${item.description} image: ${item.image_url}`)
// })
// getNigiriInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price_nigiri: ${item.price_nigiri}, price_sashimi: ${item.price_sashimi}, market_price: ${item.market_price} description: ${item.description} image: ${item.image_url}`)
// })

// getRollsInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price_nigiri: ${item.price_nigiri}, price_sashimi: ${item.price_sashimi}, market_price: ${item.market_price} description: ${item.description} image: ${item.image_url}`)
// })
// getVeggieRollInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price_nigiri: ${item.price_nigiri}, price_sashimi: ${item.price_sashimi}, market_price: ${item.market_price} description: ${item.description} image: ${item.image_url}`)
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
      <Typography variant="h3" sx={{ textAlign: "center", justifyContent: "center", pb: "2rem" }}>Sushi & Rolls</Typography>
      <NavLinksMenu />
      <Box sx={{ display: "flex", width: "100%", gap: 4, textAlign: "center", justifyContent: "center" }}>

        {/* Section for Menu items */}
        <Box sx={{ padding: 2 }}>
          <Box sx={{ border: "1px solid #FBFBFB", marginTop: 3, padding: 1 }}>

            {/* Using Grid component to create horizontal cards */}
            <Grid container spacing={12} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getHandRollsInfo.rows.map((item) => (
                <Card sx={{ width: { xs: "100%", sm: "80%", md: "80%" }, maxWidth: 250, padding: "0.5rem", border: "0.4px solid #FEF9F2", borderRadius: "10px" }} key={item.name}>
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
                        fontFamily={"Noto"}
                        fontWeight={200}
                        textAlign={"center"}
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily={"Noto Sans"}
                        fontWeight={200}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
              {getNigiriInfo.rows.map((item) => (
                <Card sx={{ width: { xs: "100%", sm: "80%", md: "80%" }, maxWidth: 250, padding: "0.5rem", border: "0.4px solid #FEF9F2", borderRadius: "10px" }} key={item.name}>
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
                        fontFamily={"Noto"}
                        fontWeight={200}
                        textAlign={"center"}
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily={"Noto Sans"}
                        fontWeight={200}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
              {getRollsInfo.rows.map((item) => (
                <Card sx={{ width: { xs: "100%", sm: "80%", md: "80%" }, maxWidth: 250, padding: "0.5rem", border: "0.4px solid #FEF9F2", borderRadius: "10px" }} key={item.name}>
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
                        fontFamily={"Noto"}
                        fontWeight={200}
                        textAlign={"center"}
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily={"Noto Sans"}
                        fontWeight={200}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
              {getVeggieRollInfo.rows.map((item) => (
                <Card sx={{ width: { xs: "100%", sm: "80%", md: "80%" }, maxWidth: 250, padding: "0.5rem", border: "0.4px solid #FEF9F2", borderRadius: "10px" }} key={item.name}>
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
                        fontFamily={"Noto"}
                        fontWeight={200}
                        textAlign={"center"}
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily={"Noto Sans"}
                        fontWeight={200}
                      >
                        {item.name}
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
