import * as React from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import NavLinksMenu from "./dashboard/nav-links";
import BackgroundImg from "@/components/homepage-background";

export default function Page() {
  return (
    <div >
      <Header />
      <BackgroundImg />
      <NavLinksMenu></NavLinksMenu>
      <Footer />
    </div>
  );
}
