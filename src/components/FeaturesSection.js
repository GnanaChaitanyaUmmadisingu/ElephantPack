// src/components/FeaturesSection.js

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const features = [
  'Eco-friendly materials',
  'Customizable designs',
  'Durable and strong',
  'Available in various sizes',
];

function FeaturesSection() {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Key Features
      </Typography>
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography variant="body1">- {feature}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturesSection;
