import * as React from "react";
import Header from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Box, createTheme, Typography } from "@mui/material";
import NavLinksMenu from "../dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";

export default function Page() {
  const theme = createTheme();
  theme.spacing(24);
  return (
    <div>
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
