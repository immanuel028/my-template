import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';
import logo from '../assets/logo.png'; // Import your logo image

const title = "Minerva Manpower Solutions"; // Define the title as a variable

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state for mobile menu

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white', top: 0, left: 0, right: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 3 }}>
        
        {/* Left Section: Logo and Title */}
        <Box display="flex" alignItems="center">
          <img src={logo} alt="logo" style={{ width: '40px', marginRight: '10px' }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#dc6601',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 'bold',
              letterSpacing: '1px', // Slight spacing for elegance
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Center Section: Navigation Links or Menu Icon */}
        {isMobile ? (
          <>
            {/* Mobile: Show Menu Icon */}
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            {/* Drawer for Mobile Navigation */}
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List sx={{ width: 250, paddingTop: 2 }}>
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Home" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif" }} />
                </ListItem>
                <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
                  <ListItemText primary="About Us" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif" }} />
                </ListItem>
                <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Services" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif" }} />
                </ListItem>
                <ListItem button component={Link} to="/careers" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Careers" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif" }} />
                </ListItem>
                <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Contact Us" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif" }} />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          // Desktop: Show Navigation Links in Center
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 2,
            }}
          >
            <Button color="inherit" component={Link} to="/" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif", textTransform: 'none' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif", textTransform: 'none' }}>
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/services" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif", textTransform: 'none' }}>
              Services
            </Button>
            <Button color="inherit" component={Link} to="/careers" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif", textTransform: 'none' }}>
              Careers
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ color: '#dc6601', fontFamily: "'Playfair Display', serif", textTransform: 'none' }}>
              Contact Us
            </Button>
          </Box>
        )}
      </Toolbar>
   
    
    </AppBar>
  );
};

export default Header;
