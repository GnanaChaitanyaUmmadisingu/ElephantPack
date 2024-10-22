// src/components/About.js

import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box sx={{ mt: 6, mb: 6, p: 3, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        About Elephant Pack
      </Typography>
      <Typography variant="body1" paragraph>
        Established in the year 2016, we, Elephant Pack, are amongst the leading Manufacturers and Exporter of Mobile Packaging Box, Sweet Box, Jewellery Box, Liquor Box, etc. These are manufactured using the best quality of raw materials at our high-end infrastructure facility which is at par with the best in the world.
      </Typography>
      <Typography variant="body1" paragraph>
        These products are highly demanded for their attractive look. They make ideal gifting items and are supplied to clients at affordable prices. These are well-known for their design and economical prices. The products are designed by our talented and creative team of designers. Our products are a unique combination of style as well as utility.
      </Typography>
      <Typography variant="body1" paragraph>
        Under the motivation and guidance of Ms. Anuradha, we have established trustworthy relationships with our clients. Our commitment to the quality of products and the integration of ethics in all our business dealings has helped us attain credibility among our clients.
      </Typography>
    </Box>
  );
}

export default About;
