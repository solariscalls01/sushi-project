import * as React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import HomepageMap from "../components/homepage-map-hours";
import MenuImageList from "../components/homepage-images";
import BackgroundImg from "../components/BackgroundImg";

export default function Home() {
  return (
    <div>
      <Header />
      <BackgroundImg />
      <HomepageMap />
      <MenuImageList />
      <Footer />
    </div>
  );
}
