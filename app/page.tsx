import * as React from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/backgroundVideo"

export default function Home() {
  return (
    <div>
      <Header />
      <BackgroundVideo />
      <Footer />
    </div>
  );
}
