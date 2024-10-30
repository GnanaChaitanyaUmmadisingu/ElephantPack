import React from 'react';
import { Box, Typography } from '@mui/material';
import BannerBackground from '../Assets/BannerBackground.webp'; 

function AnimatedBanner() {
  return (
    <Box 
      sx={{ 
        bgcolor: 'primary.main', 
        color: '#fff', 
        py: 4, 
        textAlign: 'center', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', 
        borderRadius: '0px',
        mb: 4,
        position: 'relative',
        backgroundImage: `url(${BannerBackground})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          bottom: 0, 
          left: 0, 
          bgcolor: 'rgba(0, 0, 0, 0.5)', 
          borderRadius: '8px',
        }} 
      />
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 'bold', 
          position: 'relative', 
          zIndex: 1,
          px: 2, 
          textTransform: 'none',
        }}
      >
        Serving customers across every corner of INDIA, <br></br>We ensure seamless delivery nationwide!
      </Typography>
    </Box>
  );
}

export default AnimatedBanner;
