import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";
import { db } from "@vercel/postgres";

const client = await db.connect();
const getHandRollsInfo = await client.sql`select name, price, description, image_url from handrolls `
const getNigiriInfo = await client.sql`select name, price_nigiri, price_sashimi, image_url, market_price from nigiri `
const getRollsInfo = await client.sql`select name, price, description, image_url from rolls `
const getVeggieRollInfo = await client.sql`select name, price, description, image_url from veggieroll `

getHandRollsInfo.rows.map(item => {
  console.log(`name: ${item.name}, price: ${item.price}, description: ${item.description} image: ${item.image_url}`)
})
getNigiriInfo.rows.map(item => {
  console.log(`name: ${item.name}, price_nigiri: ${item.price_nigiri}, price_sashimi: ${item.price_sashimi}, market_price: ${item.market_price} description: ${item.description} image: ${item.image_url}`)
})

getRollsInfo.rows.map(item => {
  console.log(`name: ${item.name}, price_nigiri: ${item.price_nigiri}, price_sashimi: ${item.price_sashimi}, market_price: ${item.market_price} description: ${item.description} image: ${item.image_url}`)
})
getVeggieRollInfo.rows.map(item => {
  console.log(`name: ${item.name}, price_nigiri: ${item.price_nigiri}, price_sashimi: ${item.price_sashimi}, market_price: ${item.market_price} description: ${item.description} image: ${item.image_url}`)
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
      <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
        {/* Left Menu */}
        <Box sx={{ border: "1px solid black" }}>
          <NavLinksMenu />
        </Box>

        {/* Right Side Box */}
        <Box sx={{ flex: 1, border: "1px solid black", padding: 2 }}>

          {/* Additional Items */}
          <Box sx={{ border: "1px solid black", marginTop: 2, padding: 1 }}>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Another Item
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Another Item
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
