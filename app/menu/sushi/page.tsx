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
            {/* Hand Rolls Section */}
            <Typography variant="h2" sx={{ marginBottom: 2 }}>Hand Rolls</Typography>
            <Grid container spacing={3} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getHandRollsInfo.rows.map((item) => (
                <Card
                  sx={{
                    width: { xs: "100%", sm: "99%", md: "99%" },
                    maxWidth: 400,
                    padding: "0.5rem",
                    border: "0.4px solid #FEF9F2",
                    borderRadius: "10px",
                  }}
                  key={item.name}
                >
                  <CardActionArea sx={{ pointerEvents: "none" }}>
                    <CardMedia
                      component="img"
                      height="250"
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

            {/* Sashimi / Nigiri Section */}
            <Typography variant="h2" sx={{ marginTop: 4, marginBottom: 2 }}>Sashimi / Nigiri</Typography>
            <Grid container spacing={3} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getNigiriInfo.rows.map((item) => (
                <Card
                  sx={{
                    width: { xs: "100%", sm: "80%", md: "80%" },
                    maxWidth: 400,
                    padding: "0.5rem",
                    border: "0.4px solid #FEF9F2",
                    borderRadius: "10px",
                  }}
                  key={item.name}
                >
                  <CardActionArea sx={{ pointerEvents: "none" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image_url}
                      alt={`image of ${item.name}`}
                      sx={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain", borderRadius: "10px" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontWeight={400}
                        textAlign={"center"}
                      >
                        {/* Conditional for when nigiri/ sashimi price is null (for setting market price) */}
                        {!item.price_nigiri && !item.price_sashimi ? "Market Price" : `Nigiri: ${item.price_nigiri}  |  Sashimi: ${item.price_sashimi}`
                        }
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={200}
                      >
                        {item.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Grid>
            <Typography variant="h2" sx={{ marginTop: 4, marginBottom: 2 }}>Sushi Rolls</Typography>
            <Grid container spacing={3} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getRollsInfo.rows.map((item) => (
                <Card
                  sx={{
                    width: { xs: "100%", sm: "80%", md: "80%" },
                    maxWidth: 400,
                    padding: "0.5rem",
                    border: "0.4px solid #FEF9F2",
                    borderRadius: "10px",
                  }}
                  key={item.name}
                >
                  <CardActionArea sx={{ pointerEvents: "none" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image_url}
                      alt={`image of ${item.name}`}
                      sx={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain", borderRadius: "10px" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontWeight={400}
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
            <Typography variant="h2" sx={{ marginTop: 4, marginBottom: 2 }}>Veggie Rolls</Typography>
            <Grid container spacing={3} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getVeggieRollInfo.rows.map((item) => (
                <Card
                  sx={{
                    width: { xs: "100%", sm: "80%", md: "80%" },
                    maxWidth: 400,
                    padding: "0.5rem",
                    border: "0.4px solid #FEF9F2",
                    borderRadius: "10px",
                  }}
                  key={item.name}
                >
                  <CardActionArea sx={{ pointerEvents: "none" }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image_url}
                      alt={`image of ${item.name}`}
                      sx={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain", borderRadius: "10px" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        fontWeight={400}
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
    </div >
  );
}
