import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Box, Grid2 } from '@mui/material';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';


export default function MenuImageList() {
    return (
        // Using the box wrapper to wrap the header component for better styling
        <div className="w-full h-auto mb-4 flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                {itemData.map((item) => (
                    <div key={item.img} className="p-4">
                        <img 
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            className="w-3/4 h-auto object-cover mx-auto"
                            style={{maxWidth: '500px', minWidth: '300px', borderRadius: '10px'}}
                        />
                        <div className="mt-3 text-center">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const itemData = [
    {
        img: '/images/california-roll.png',
        title: 'California Roll',
    },
    {
        img: '/images/sashimi-platter.png',
        title: 'Sashimi Platter',
    },
    {
        img: '/images/rainbow-roll.png',
        title: 'Rainbow Roll',
    },
];

// NEED TO WORK ON RESPONIVE DESIGN FOR THIS