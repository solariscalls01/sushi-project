import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Typography } from "@mui/material";

// Will require multiple props in order to address certain menu items that have different attributes (e.g., price_small, sashimi/ nigiri etc...)
export default function MenuCardItems({ item, useSmallPrice = true, useLargePrice = true }) {
    return (
        <div>
            <Card sx={{
                width: { xs: "100%", sm: "99%", md: "99%" },
                width: 400, maxWidth: 500, height: "auto", border: "1.1px solid #FEF9F2", borderRadius: "10px",
                display: "flex", flexDirection: "column", justifyContent: "center"
            }} key={item.name}>
                <CardActionArea sx={{ pointerEvents: "none", height:"100%" }}>
                    <CardMedia
                        component="img"
                        image={item.image_url}
                        alt={`image of ${item.name}`}
                        sx={{ width: "100%", maxHeight: "250px", objectFit: "cover", display:"block", borderRadius: "10px", marginLeft:"auto" }}
                    />
                    <CardContent sx={{flexGrow:1, display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            textAlign={"center"}
                        >
                            {item.price}
                            {useSmallPrice ? item.price_small : item.price}
                            {useLargePrice && item.price_large ? ` | Large: ${item.price_large}` : ''}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {item.name}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                        >
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}