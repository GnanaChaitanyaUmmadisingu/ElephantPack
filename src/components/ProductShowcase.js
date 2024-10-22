// src/components/ProductShowcase.js

import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const products = [
  { id: 1, name: 'Classic Gold Box', img: '/path/to/gold-box.jpg', description: 'Elegant and durable.' },
  { id: 2, name: 'Royal Blue Box', img: '/path/to/blue-box.jpg', description: 'Perfect for gifts.' },
  { id: 3, name: 'Eco Green Box', img: '/path/to/green-box.jpg', description: 'Sustainable luxury.' },
];

function ProductShowcase() {
  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductShowcase;
