// src/components/ContactUs.js

import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import StorefrontIcon from '@mui/icons-material/Storefront';

function ContactUs() {
  return (
    <Box 
      sx={{ 
        mt: 8, 
        p: 4, 
        bgcolor: '#f4f4f4', 
        borderRadius: '8px', 
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        We would love to hear from you! Reach out to us through any of the following ways:
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneIcon sx={{ color: '#4caf50', fontSize: 30 }} />
          <Typography variant="body1">+91 9676811066</Typography>
        </Box>

        {/* Email */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon sx={{ color: '#ff9800', fontSize: 30 }} />
          <Typography variant="body1">elephantpack16@gmail.com</Typography>
        </Box>

        {/* Instagram */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            component={Link}
            href="https://instagram.com/your-instagram"
            target="_blank"
            sx={{ color: '#E4405F' }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <Typography variant="body1">Instagram</Typography>
        </Box>

        {/* IndiaMART */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            component={Link}
            href="https://www.indiamart.com/elephantpack/"
            target="_blank"
            sx={{ color: '#1565c0' }}
          >
            <StorefrontIcon fontSize="large" />
          </IconButton>
          <Typography variant="body1">IndiaMART</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
