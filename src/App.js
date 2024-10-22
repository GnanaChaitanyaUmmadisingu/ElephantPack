// src/App.js

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4A4A4A',
    },
    secondary: {
      main: '#FFD700',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#4A4A4A',
    },
    h6: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <HeroSection />
      <Container>
        <ProductShowcase />
        <FeaturesSection />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
