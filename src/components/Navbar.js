import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../Assets/ElephantPack-Logo.webp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Navbar({ onContactClick }) {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <img 
            src={logo} 
            alt="Elephant Pack Logo" 
            style={{ width: '40px', height: '40px', marginRight: '10px' }} 
          />
          <Typography variant="h6" sx={{ color: 'black' }}>
            Elephant Pack
          </Typography>
        </Box>

        <Button 
          color="secondary" 
          variant="contained" 
          startIcon={<LocalPhoneIcon />} 
          onClick={onContactClick} 
        >
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
