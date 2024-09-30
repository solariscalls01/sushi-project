import * as React from "react";
import Image from "next/image";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import NavLinks from "@/components/Nav-links";

export default function Home() {
  return (
    <div>
      {/* Include the DrawerAppBar component */}
      <Header />

      {/* Main content area */}
      <div style={{ padding: "20px" }}>
        <h1>Welcome to Our Sushi Restaurant</h1>
        <p>Experience the finest sushi with us!</p>
      </div>
      <Footer />
    </div>
  );
}
