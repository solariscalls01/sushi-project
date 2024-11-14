import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import CardFood from "../../../components/CardFood"
import { db } from "@vercel/postgres";

const client = await db.connect();
const getNoodlesInfo = await client.sql`select name, price, description, image_url from noodles`

getNoodlesInfo.rows.map(item => {
  console.log(`name: ${item.name}, price: ${item.price}, image: ${item.image_url}`)
})

export default function Page() {
  const theme = createTheme();
  theme.spacing(24);
  return (
    <div style={{
      width: "80%",
      margin: "5rem auto",
    }}>
      <Header />
      <BackgroundImg />
      <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
        {/* Left Menu */}
        <Box sx={{ border: "1px solid black" }}>
          <NavLinksMenu />
        </Box>

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
