import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from '../Assets/Background-Image.webp';

function HeroSection({ onExploreClick }) {
  return (
    <Box 
      sx={{
        width: '100vw', 
        height: '100vh',
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
          background: 'rgba(0, 0, 0, 0.5)', 
          zIndex: 1,
        },
        zIndex: 2,
      }}
    >
      <Typography 
        sx={{ 
          zIndex: 2, 
          fontWeight: 100,
          fontSize: 70,
          color: 'white',
          fontFamily: 'Dancing Script, cursive', 
          animation: 'fadeSlideUp 3s ease-in-out forwards', 
          opacity: 0,
        }}
      >
        Luxury Rigid Boxes
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          mt: 2, 
          zIndex: 2, 
          fontFamily: 'cursive', 
          animation: 'fadeSlideUp 4s ease-in-out forwards', 
          opacity: 0,
        }}
      >
        Crafted for Elegance and Durability
      </Typography>
      <Button 
        color="secondary" 
        variant="contained" 
        sx={{ 
          mt: 4, 
          zIndex: 2, 
          animation: 'fadeSlideUp 5s ease-in-out forwards', 
          opacity: 0,
        }}
        onClick={onExploreClick}
      >
        Explore Collection
      </Button>

      <style>
        {`
          @keyframes fadeSlideUp {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
}

export default HeroSection;
