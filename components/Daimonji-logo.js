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
                        height: "200px", width: "200px",
                        maxHeight: { xs: "70px", sm: "80px" },
                        maxWidth: { xs: "70px", sm: "80px" },
                        textAlign: "center",
                        justifyContent: "center"
                    }} alt="Daimonji logo" src="/images/logo.png" />
            </Link>
        </Box>
    );
}