import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const features = [
  { 
    name: 'Eco-friendly materials', 
    icon: <RecyclingIcon sx={{ color: '#4caf50', fontSize: 40 }} />, 
    bgColor: '#e8f5e9',
    description: 'Our boxes are made from sustainable materials, reducing environmental impact.'
  },
  { 
    name: 'Customizable designs', 
    icon: <BuildIcon sx={{ color: '#ff9800', fontSize: 40 }} />, 
    bgColor: '#fff3e0',
    description: 'Tailor designs to fit your brand, from color to structure, ensuring a unique look.'
  },
  { 
    name: 'Durable and strong', 
    icon: <SecurityIcon sx={{ color: '#f44336', fontSize: 40 }} />, 
    bgColor: '#ffebee',
    description: 'Built to withstand pressure and weight, providing ultimate protection for your products.'
  },
  { 
    name: 'Available in various sizes', 
    icon: <AspectRatioIcon sx={{ color: '#3f51b5', fontSize: 40 }} />, 
    bgColor: '#e8eaf6',
    description: 'Available in multiple sizes to accommodate different products, from small to large.'
  },
  { 
    name: 'Water-resistant', 
    icon: <WaterDropIcon sx={{ color: '#00bcd4', fontSize: 40 }} />, 
    bgColor: '#e0f7fa',
    description: 'Water-resistant coating ensures protection against moisture during shipping.'
  },
  { 
    name: 'Lightweight Design', 
    icon: <FitnessCenterIcon sx={{ color: '#9c27b0', fontSize: 40 }} />, 
    bgColor: '#f3e5f5',
    description: 'Our lightweight design reduces shipping costs while maintaining strength.'
  },
];

function FeaturesSection() {
  return (
    <Box sx={{ mt: 8, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Key Features
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
        {features.map((feature, index) => (
          <Card 
            key={index}
            sx={{
              width: '300px',
              borderRadius: '12px',
              bgcolor: feature.bgColor,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Box sx={{ mb: 2 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {feature.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default FeaturesSection;
