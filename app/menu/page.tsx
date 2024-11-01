import * as React from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import { createTheme, Typography } from "@mui/material";
import NavLinksMenu from "./dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";

export default function Page() {
  const theme = createTheme();
  theme.spacing(24);
  return (
    <div>
      <Header />
      <BackgroundImg />
      <NavLinksMenu></NavLinksMenu>
      <Footer />
    </div>
  );
}
