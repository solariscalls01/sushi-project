import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import MenuCardItems from "@/components/menu-card-items";
import Grid from '@mui/material/Grid2';
import { db } from "@vercel/postgres";

const client = await db.connect()
const getDrinksInfo = await client.sql`select name, price, image_url from drinks`
const getAlcoholInfo = await client.sql`select name, price_small, price_large, description, image_url from alcohol `

// getDrinksInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price: ${item.price}, image: ${item.image_url}`)
// })

// getAlcoholInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price_small: ${item.price_small}, price_large: ${item.price_large}, description: ${item.description} image: ${item.image_url}`)
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
      <Typography variant="h3" sx={{ textAlign: "center", justifyContent: "center", pb: "2rem" }}>Drinks</Typography>
      <NavLinksMenu />
      <Box sx={{ display: "flex", width: "100%", gap: 4, textAlign: "center", justifyContent: "center" }}>

        {/* Section for Menu items */}
        <Box sx={{ padding: 2 }}>
          <Box sx={{ border: "1px solid #FBFBFB", marginTop: 3, padding: 1 }}>

            {/* Using Grid component to create horizontal cards */}
            <Typography variant="h4">Non-Alcoholic Beverages</Typography>
            <Grid container spacing={12} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getDrinksInfo.rows.map((item, index) => (
                <MenuCardItems key={item.id || index} item={item}/>
              ))}
              {/* Alcohol section */}
              <Typography variant="h4">Alcoholic Beverages</Typography>
              <Grid container spacing={12} sx={{ textAlign: "center", justifyContent: "center" }}>
                {getAlcoholInfo.rows.map((item,index) => (
                  <MenuCardItems key={item.id || index} item={item} />
                ))}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
