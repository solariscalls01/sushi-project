"use client"
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function businessHours() {
    return (
        <Box sx={{
            padding: "1rem",
            borderRadius: "10px",
            width: { xs: "100%", sm: "100%", md: "90%" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "0 auto"
        }}>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
                <strong>Business Hours</strong>:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
                Monday - Friday: 11:00am - 2pm; 5:00pm - 9:00pm
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
                Saturday: 5:00pm - 9:00pm
            </Typography>
            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: "1rem" } }}>
                Sunday: <strong>CLOSED</strong>
            </Typography>
        </Box>
    )
}