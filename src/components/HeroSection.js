// src/components/HeroSection.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// Import the background image from the assets folder
import backgroundImage from '../Assets/Background-Image.webp';

function HeroSection() {
  return (
    <Box 
      sx={{
        width: '100vw',  // Set width to full viewport width
        height: '100vh', // Set height to full viewport height
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)', // Overlay for better text visibility
          zIndex: 1,
        },
        zIndex: 2,
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          zIndex: 2, 
          fontWeight: 'bold',
          color: 'white', // Set header text to white
        }}
      >
        Luxury Cardboard Boxes
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, zIndex: 2 }}>
        Crafted for Elegance and Durability
      </Typography>
      <Button color="secondary" variant="contained" sx={{ mt: 4, zIndex: 2 }}>
        Explore Collection
      </Button>
    </Box>
  );
}

export default HeroSection;
