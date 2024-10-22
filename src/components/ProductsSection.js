import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const products = [
  {
    name: 'Mobile Packaging Box',
    description: 'High-quality mobile packaging boxes for safe and attractive packaging.',
    image: require('../Assets/MobileBox.webp'),
  },
  {
    name: 'Liquor Box',
    description: 'Durable and stylish liquor boxes for premium packaging.',
    image:require('../Assets/LiquorBox.webp'),
  },
  {
    name: 'Sweet Box',
    description: 'Beautifully designed sweet boxes for festive and gifting occasions.',
    image: require('../Assets/SweetBox.webp'),
  },
  {
    name: 'Jewellery Box',
    description: 'Elegant and secure jewellery boxes for luxurious presentations.',
    image: require('../Assets/JewelleryBox.webp'),
  },
  {
    name: 'Saree Box',
    description: 'Premium saree boxes for traditional and modern designs.',
    image: require('../Assets/SareeBox.webp'),
  },
  {
    name: 'Dry Fruit Candy Box',
    description: 'Attractive dry fruit and candy boxes for special occasions.',
    image: require('../Assets/DryFruitBox.webp'),
  },
  {
    name: 'Travelling Chess Boxes',
    description: 'Compact and stylish travelling chess boxes for game lovers.',
    image: require('../Assets/PurfumeBox.webp'),
  },
];

function ProductsSection() {
  return (
    <Box 
      sx={{ 
        mt: 8, 
        textAlign: 'center', 
        backgroundColor: '#f5f5f5', 
        py: 4 
      }}
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{pl: 2}}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <Card 
              sx={{ 
                maxWidth: 345, 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsSection;
