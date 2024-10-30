import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Typography, Link, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CloseIcon from '@mui/icons-material/Close';

function ContactDialog({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box 
          sx={{ 
            mt: 2, 
            p: 2, 
            bgcolor: '#f4f4f4', 
            borderRadius: '8px', 
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
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
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;
