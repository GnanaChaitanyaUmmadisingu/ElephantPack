// src/components/HeroSection.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HeroSection() {
  return (
    <Box 
      sx={{
        height: '60vh',
        backgroundImage: 'url(/path/to/your/banner.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      <Typography variant="h1">Luxury Cardboard Boxes</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Crafted for Elegance and Durability
      </Typography>
      <Button color="secondary" variant="contained" sx={{ mt: 4 }}>
        Explore Collection
      </Button>
    </Box>
  );
}

export default HeroSection;
