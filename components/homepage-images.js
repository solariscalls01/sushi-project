import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MenuImageList() {
    return (
        // Using the box wrapper to wrap the header component for better styling
        <Box sx={{ width: '100%', height: "auto" }} >
            <Box sx={{ textAlign: 'center', mb: 1 }}>
                <ListSubheader component="div" sx={{fontSize: '1.5rem'}}>Items from the Menu
                </ListSubheader>
            </Box>
            <ImageList sx={{ width: '50%', height: '100%'}} cols={3} gap={8} rowHeight={300}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{padding:"1.2rem"}}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '100%', height: '100%' }}
                        />
                        <ImageListItemBar
                            title={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'California Roll',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Sashimi Platter',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Allison Roll',
    },
];

// NEED TO WORK ON RESPONIVE DESIGN FOR THIS