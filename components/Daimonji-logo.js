"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function DaimonjiLogo() {
    return (
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Link href="/" passHref style={{ display: "flex", justifyContent: "center" }}>
                <Box
                    component="img"
                    sx={{
                        height: "600px", width: "600px",
                        maxHeight: { xs: "50px", sm: "75px", md: "125px" },
                        maxWidth: { xs: "50px", sm: "75px", md: "125px" },
                        textAlign: "center",
                        justifyContent: "center"
                    }} alt="Daimonji logo" src="/images/DAIMONJI-LOGO.png" />
            </Link>
        </Box>
    );
}