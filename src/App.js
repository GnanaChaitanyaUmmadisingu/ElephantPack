import React, { useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import About from './components/About';
import ProductsSection from './components/ProductsSection'; 
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { ChatWithUs } from './components/ChatWithUs';
import AnimatedBanner from './components/AnimatedBanner';

const theme = createTheme({
  palette: {
    primary: { main: '#4A4A4A' },
    secondary: { main: '#FFD700' },
  },
  typography: {
    fontFamily: '"Circular Std", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 'bold', color: '#4A4A4A' },
    h6: { fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
  },
});

function App() {
  const productsRef = useRef(null);
  const contactUsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactUs = () => {
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onContactClick={scrollToContactUs} />
      <HeroSection onExploreClick={scrollToProducts} />
      <Container sx={{pt: 10}}>
       <AnimatedBanner />
        <div ref={productsRef}>
          <ProductsSection /> 
        </div>
        <FeaturesSection />
        <About />
        <div ref={contactUsRef}>
          <ContactUs />
        </div>
        <ChatWithUs />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
