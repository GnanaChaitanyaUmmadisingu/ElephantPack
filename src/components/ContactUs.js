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
        {/* Phone */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneIcon sx={{ color: '#4caf50', fontSize: 30 }} />
          <Link 
            variant="body1" 
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            +91 9676811066
          </Link>
        </Box>

        {/* Email */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon sx={{ color: '#ff9800', fontSize: 30 }} />
          <Link 
            href="mailto:elephantpack16@gmail.com" 
            variant="body1" 
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            elephantpack16@gmail.com
          </Link>
        </Box>

        {/* Instagram */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            component={Link}
            href="https://www.instagram.com/elephant_pack/?igsh=Z2J2czFzczg5NHV0"
            target="_blank"
            rel="noopener"
            sx={{ color: '#E4405F' }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <Link 
            href="https://www.instagram.com/elephant_pack/?igsh=Z2J2czFzczg5NHV0" 
            variant="body1" 
            target="_blank" 
            rel="noopener" 
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            Instagram
          </Link>
        </Box>

        {/* IndiaMART */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            component={Link}
            href="https://www.indiamart.com/elephantpack/"
            target="_blank"
            rel="noopener"
            sx={{ color: '#1565c0' }}
          >
            <StorefrontIcon fontSize="large" />
          </IconButton>
          <Link 
            href="https://www.indiamart.com/elephantpack/" 
            variant="body1" 
            target="_blank" 
            rel="noopener" 
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            IndiaMART
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
