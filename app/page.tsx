import * as React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/backgroundVideo";
import HomepageMap from "../components/homepage-map-hours";
import MenuImageList from "../components/homepage-images";

export default function Home() {
  return (
    <div>
      <Header />
      <BackgroundVideo />
      <HomepageMap />
      <MenuImageList />
      <Footer />
    </div>
  );
}
