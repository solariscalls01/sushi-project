import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import CardFood from "../../../components/CardFood"
import { db } from "@vercel/postgres";

// Get name, price, description, from db
const client = await db.connect();
const getAppetizerInfo = await client.sql`select name, price, description,image_url from appetizers`

getAppetizerInfo.rows.map(item => {
  console.log(`Name: ${item.name}, Price: ${item.price}, Descrption: ${item.description}, Image_URL: ${item.image_url}`)
})

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
      <Box sx={{ display: "flex", width: "100%", gap: 2 }}>

        {/* Right Side Content */}
        <Box sx={{ flex: 1, border: "1px solid black", padding: 2 }}>
          <Box sx={{ border: "1px solid black", marginTop: 2, padding: 1 }}>
            <CardFood></CardFood>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
