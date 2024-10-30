import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

export function ChatWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contact: '',
    ask: '',
    description: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict contact number to numeric input only
    if (name === 'contact' && !/^[0-9]*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    // Ensure required environment variables are available
    if (!serviceId || !templateId) {
      alert('Email service configuration is missing. Please check your environment variables.');
      return;
    }

    // Sending email via EmailJS
    emailjs.send(serviceId, templateId, formData)
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          location: '',
          contact: '',
          ask: '',
          description: ''
        });
      })
      .catch((err) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', err);
      });
  };

  return (
    <Box 
      sx={{ 
        mt: 8, 
        p: 4, 
        bgcolor: '#f4f4f4', 
        borderRadius: '8px', 
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Chat with us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Name" 
          name="name" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <TextField 
          label="Location" 
          name="location" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={formData.location} 
          onChange={handleChange} 
          required 
        />
        <TextField 
          label="Contact Number" 
          name="contact" 
          type="tel" 
          inputProps={{ maxLength: 15 }}
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={formData.contact} 
          onChange={handleChange} 
          required 
        />
        <TextField 
          label="Ask" 
          name="ask" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }} 
          value={formData.ask} 
          onChange={handleChange} 
          required 
        />
        <TextField 
          label="Description" 
          name="description" 
          variant="outlined" 
          fullWidth 
          multiline 
          rows={4} 
          sx={{ mb: 2 }} 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
