import * as React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Typography } from "@mui/material";
export default function Page() {
    return (
        <div>
            <NavBar />
            <Typography variant="h1" sx={{ justifyContent: 'center', textAlign: 'center' }}>
                Reservations page
            </Typography>
            <Footer />
        </div>
    );
}
