import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import Grid from '@mui/material/Grid2';
import { db } from "@vercel/postgres";
import MenuCardItems from "@/components/menu-card-items";

const client = await db.connect();
const getNoodlesInfo = await client.sql`select name, price, description, image_url from noodles`

// getNoodlesInfo.rows.map(item => {
//   console.log(`name: ${item.name}, price: ${item.price}, image: ${item.image_url}`)
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
      <Typography variant="h3" sx={{ textAlign: "center", justifyContent: "center", pb: "2rem" }}>Noodles</Typography>
      <NavLinksMenu />
      <Box sx={{ display: "flex", width: "100%", gap: 4, textAlign: "center", justifyContent: "center" }}>

        {/* Section for Menu items */}
        <Box sx={{ padding: 2 }}>
          <Box sx={{ border: "1px solid #FBFBFB", marginTop: 3, padding: 1 }}>

            {/* Using Grid component to create horizontal cards */}
            <Grid container spacing={12} sx={{ textAlign: "center", justifyContent: "center" }}>
              {getNoodlesInfo.rows.map((item, index) => (
                <MenuCardItems key={item.id || index} item={item}/>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
