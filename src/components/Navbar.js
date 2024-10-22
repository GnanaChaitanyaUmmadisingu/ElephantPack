// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Elephant Pack
        </Typography>
        <Button color="secondary" variant="contained">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
