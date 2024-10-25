import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/images/tonkatsu-ramen.png"
                    alt="tonkatsu ramen"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={'Arial'} fontWeight={200} textAlign={'center'}>
                        $6.0
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={'Noto Sans'} fontWeight={200}>
                        Tonkotsu Ramen
                    </Typography>
                    {/* <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        Savory pork broth, housemade chasu, egg, and seawweed
                    </Typography> */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
