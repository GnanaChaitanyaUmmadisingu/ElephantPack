import React from 'react';
import { Box, Typography } from '@mui/material';
import logo from '../Assets/ElephantPack-Logo.webp';
import { Business, DesignServices, Gavel } from '@mui/icons-material';

function About() {
  return (
    <Box sx={{ mt: 6, mb: 6, p: 3, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <img 
            src={logo} 
            alt="Elephant Pack Logo" 
            style={{ width: '40px', height: '40px', marginRight: '10px' }} 
          />
        <Typography variant="h4">
          About Elephant Pack
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Business 
          sx={{ 
            mr: 2, 
            color: 'black', 
            padding: '4px', 
            bgcolor: '#fce4ec', 
            borderRadius: '50%', 
            fontSize: '40px' 
          }} 
        />
        <Typography variant="body1">
          Established in the year 2016, we, Elephant Pack, are amongst the leading Manufacturers and Exporter of Mobile Packaging Box, Sweet Box, Jewellery Box, Liquor Box, etc. These are manufactured using the best quality of raw materials at our high-end infrastructure facility which is at par with the best in the world.
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <DesignServices 
          sx={{ 
            mr: 2, 
            color: 'error.main', 
            padding: '4px', 
            bgcolor: '#ffebee', 
            borderRadius: '50%', 
            fontSize: '40px' 
          }} 
        />
        <Typography variant="body1">
          These products are highly demanded for their attractive look. They make ideal gifting items and are supplied to clients at affordable prices. These are well-known for their design and economical prices. The products are designed by our talented and creative team of designers. Our products are a unique combination of style as well as utility.
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Gavel 
          sx={{ 
            mr: 2, 
            color: 'success.main', 
            padding: '4px', 
            bgcolor: '#e8f5e9', 
            borderRadius: '50%', 
            fontSize: '40px' // Explicitly set the icon size
          }} 
        />
        <Typography variant="body1">
          Under the motivation and guidance of Ms. Anuradha, we have established trustworthy relationships with our clients. Our commitment to the quality of products and the integration of ethics in all our business dealings has helped us attain credibility among our clients.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
