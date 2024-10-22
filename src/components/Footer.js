// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ mt: 8, py: 4, textAlign: 'center', bgcolor: '#f4f4f4' }}>
      <Typography variant="body2">
        © 2024 Elephant Pack - All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;

