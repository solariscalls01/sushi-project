import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import Grid from '@mui/material/Grid2';
import { db } from "@vercel/postgres";
import MenuCardItems from "@/components/menu-card-items";

const client =await db.connect()
const getChirashiInfo = await client.sql`select name, price, description, image_url from chirashi`

// getChirashiInfo.rows.map(item => {
//   console.log(`Name: ${item.name}, Description: ${item.description}, Price: ${item.price}, URL: ${item.image_url}`)
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
      <Typography variant="h3" sx={{ textAlign: "center", justifyContent: "center", pb: "2rem" }}>Chirashi Bowls</Typography>
      <NavLinksMenu />
      <Box sx={{ display: "flex", width: "100%", gap: 4, textAlign: "center", justifyContent: "center" }}>

        {/* Section for Menu items */}
        <Box sx={{ padding: 2 }}>
          <Box sx={{ border: "1px solid #FBFBFB", marginTop: 3, padding: 1 }}>

            {/* Using Grid component to create horizontal cards */}
            <Grid container spacing={8} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getChirashiInfo.rows.map((item) => (
                <MenuCardItems item={item} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
