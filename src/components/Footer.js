import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'; // Import social media icons

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white', // Light orange background color
        padding: 3,
        color: '#333', // Dark text for better contrast and readability
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="caption" sx={{ fontFamily: "'Playfair Display', serif", color: '#dc6601' }}>
        © {new Date().getFullYear()} Minerva Manpower Solutions. All rights reserved.
      </Typography>

      {/* Social Media Icons */}
      <Box sx={{ marginTop: 2 }}>
        <IconButton
          color="primary"
          component="a"
          href="https://www.facebook.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </IconButton>

        <IconButton
          color="primary"
          component="a"
          href="https://twitter.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </IconButton>

        <IconButton
          color="primary"
          component="a"
          href="https://www.linkedin.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton
          color="primary"
          component="a"
          href="https://www.instagram.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
