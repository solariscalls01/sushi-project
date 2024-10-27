import * as React from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import { createTheme, Typography } from "@mui/material";
import NavLinksMenu from "./dashboard/nav-links";
export default function Page() {
  const theme = createTheme();
  theme.spacing(24);
  return (
    <div>
      <Header />
      <Typography
        variant="h2"
        sx={{ justifyContent: "center", textAlign: "center", mt: 3, mb: 3 }}
      >
        {" "}
        Menu
      </Typography>
      <NavLinksMenu></NavLinksMenu>
      <Footer />
    </div>
  );
}
