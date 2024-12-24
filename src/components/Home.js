import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography, Button, Paper, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import background from '../assets/background.jpg'; // Import your background image
import { styled, keyframes } from '@mui/system';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';


import bg from '../assets/bg.jpg';
import driver from '../assets/driver.png';
import chef from '../assets/chef.png';
import worker from '../assets/worker.png';
import plumer from '../assets/plumer.png';
import missionImage from '../assets/Mission.jpg';
import VissionImage from '../assets/Vision.jpg';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

// content
const missionContent1  = `To empower business by providing exceptional manpower solutions that match talent with opportunity. We are dedicated to fostering strong partnerships, understanding client needs, and delivering skilled professionals who drive success.`;
const missionContent2 = `"Help those who have no education and want to learn and get a work"`;

// Define keyframes for the transition
const moveToCenter = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled component for the transition
const TransitionBox = styled(Box)`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${moveToCenter} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

const Item = ({ children, imageSrc }) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      backgroundColor: 'white',
      marginRight: { xs: 8 , sm: 0 },
      border: 'none', // Removes border
      boxShadow: 'none', // Removes shadow
   
    }}
  >
    <img src={imageSrc} alt={children} style={{ width: 180, height: 180, objectFit: 'cover' }} />
    {children}
  </Paper>
);

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
const Home = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    mission: false,
    vision: false,
  });

  const [isHoveredClient, setIsHoveredClient] = useState(false);
  const [isHoveredApplicant, setIsHoveredApplicant] = useState(false);

  const [showClientForm, setShowClientForm] = useState(false);  // Client form starts hidden
  const [showApplicantForm, setShowApplicantForm] = useState(true);  // Applicant form starts visible

  const heroRef = useRef(null);
  const categoryRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const serviceRef = useRef(null);
  const spacer1 = useRef(null);
  const spacer2 = useRef(null);
  const spacer3 = useRef(null);
  

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        } else {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: false,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [categoryRef.current, heroRef.current, missionRef.current, visionRef.current, serviceRef.current,spacer1.current,spacer2.current,spacer3.current];
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleClientButtonClick = () => {
    setShowClientForm(true);
    setShowApplicantForm(false); // Hide applicant form when client form is shown
  };

  const handleApplicantButtonClick = () => {
    setShowApplicantForm(true);
    setShowClientForm(false); // Hide client form when applicant form is shown
  };

  return (
    <Box sx={{ backgroundImage: { bg }, borderRadius: '10px',
    height: {
      xs: 'auto',  // Full height for small screens
      sm: 'auto',  // Full height for medium screens
      md: 'auto',  // Full height for larger screens
    }}}>
      {/* Hero Section */}
      <Box sx={{ width: '100%', p: 4, fontSize: '2rem',
        height: {
          xs: 'auto',  // Full height for small screens
          sm: 'auto',  // Full height for medium screens
          md: '80vh',  // Full height for larger screens
        }
      }}>
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="center"
            sx= {{
              marginTop: {
                xs: 'auto',  // Full height for small screens
                sm: 'auto',  // Full height for medium screens
                md: '250px',  // Full height for larger screens
              }
            }}
          >
            <Grid item xs={12} sm={4} md={5}>
              <Box
                  sx={{
                    p: 4,
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat',
                    marginRight: { xs: 8 , sm: 0 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      marginLeft: { xs: '10px', sm: '100px' },
                      fontFamily: 'Montserrat',
                      textAlign: { xs: 'left', sm: 'left' },
                    }}
                  >
                  Connecting Talent with Opportunity, Empowering Success Together!
                  </Typography>
                </Box>
                {/* Buttons */}
                <Box
                  sx={{
                    p: 4,
                    fontSize: '2rem',
                
                    fontFamily: 'Montserrat',
                    marginLeft: { xs: '10px', sm: '100px' },
                    textAlign: { xs: 'left', sm: 'left' },
                    marginRight: { xs: 8 , sm: 0 },
                  }}
                >
                  <Button
                    variant="contained"
                    onMouseEnter={() => setIsHoveredClient(true)}
                    onMouseLeave={() => setIsHoveredClient(false)}
                    onClick={handleClientButtonClick}
                    sx={{
                      fontFamily: 'Montserrat',
                      marginRight: '5px',
                      marginBottom: '5px',
                      backgroundColor: isHoveredClient ? 'blue' : 'black',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      width: 'auto',
                      ':hover': {
                        backgroundColor: 'blue',
                      },
                    }}
                  >
                    For Our Client's
                  </Button>
                  <Button
                    variant="contained"
                    onMouseEnter={() => setIsHoveredApplicant(true)}
                    onMouseLeave={() => setIsHoveredApplicant(false)}
                    onClick={handleApplicantButtonClick}
                    sx={{
                      fontFamily: 'Montserrat',
                      marginRight: '5px',
                      marginBottom: '5px',
                      backgroundColor: isHoveredApplicant ? 'blue' : 'black',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      width: 'auto',
                      ':hover': {
                        backgroundColor: 'blue',
                      },
                    }}
                  >
                    For Applicant's
                  </Button>
                </Box>                
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                  {/* Forms Positioned to the Center */}
                <Box sx={{
                  backgroundColor: 'white',
                  flexDirection: 'column',
                  gap: '20px',
                  alignItems: 'center',
                  justifyContent: 'left',
                  borderRadius: '20px',
                  marginRight: { xs: 8 , sm: 0 },
    
                }}>
                  {/* Conditionally Render Client Form */}
                  {showClientForm && (
                    <Box sx={{ padding: 4, width: 'auto' }}>
                      <Typography variant="h5" sx={{ marginBottom: 2, color: 'black' }}>Client Form</Typography>
                      <form>
                        <TextField label="Company Name" fullWidth sx={{ marginBottom: 2 }} />
                        <TextField label="Contact Name" fullWidth sx={{ marginBottom: 2 }} />
                        <TextField label="Email" type="email" fullWidth sx={{ marginBottom: 2 }} />
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                          <InputLabel>Service Required</InputLabel>
                          <Select label="Service Required">
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="Construction">Construction</MenuItem>
                            <MenuItem value="Healthcare">Healthcare</MenuItem>
                          </Select>
                        </FormControl>
                        <Button variant="contained" type="submit">Send</Button>
                      </form>
                    </Box>
                  )}

                  {/* Conditionally Render Applicant Form */}
                  {showApplicantForm && (
                    <Box sx={{ padding: 4, width: 'auto' }}>
                      <Typography variant="h5" sx={{ marginBottom: 2, color: 'black' }}>Applicant Form</Typography>
                      <form>
                        <TextField label="Full Name" fullWidth sx={{ marginBottom: 2 }} />
                        <TextField label="Email" type="email" fullWidth sx={{ marginBottom: 2 }} />
                        <TextField label="Phone Number" type="tel" fullWidth sx={{ marginBottom: 2 }} />
                        <TextField label="Skills" fullWidth sx={{ marginBottom: 2 }} />
                        <Button variant="contained" type="submit">Send</Button>
                      </form>
                    </Box>
                  )}
                </Box>
        
            </Grid>
        </Grid>
      </Box>
      {/* Category Section */}
      <TransitionBox
        ref={categoryRef}
        data-section="category"
        className={visibleSections.category ? 'visible' : ''}
        sx={{
          height: 'auto',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
          padding: 2,
          backgroundColor: 'white',
          marginTop: {
            xs: 'auto',  // Full height for small screens
            sm: 'auto',  // Full height for medium screens
            md: '75px',  // Full height for larger screens
          }
        }}
      >
        <Box sx={{ width: '100%', p: 4, fontSize: '2rem', marginBottom: 2, marginTop: '15px', textAlign: 'center',marginRight: { xs: 8 , sm: 0 }, }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Montserrat',
              color: '#dc6601',
              fontWeight: 'bold',
            }}
          >
            Beautys
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={driver}>Nail Technician</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={chef}>Eyebrow Technician</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={worker}>Lips Pigmentation Artist</Item>
            </Grid>
          </Grid>

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Montserrat',
              color: '#dc6601',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Constructions
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={plumer}>Bricklayer</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={driver}>Electrician</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={chef}>Plumber</Item>
            </Grid>
          </Grid>

          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Montserrat',
              color: '#dc6601',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Households
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={worker}>Housekeeper</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={plumer}>Laundry Worker</Item>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <Item imageSrc={driver}>Kitchen Helper</Item>
            </Grid>
          </Grid>
        </Box>
      </TransitionBox>
      {/* spacer 1 */}
      <TransitionBox
          ref={spacer1}
          data-section="spacer1"
          className={visibleSections.spacer1 ? 'visible' : ''}
          sx={{
            height: 'auto',
            color: 'white',
            textAlign: 'center',
            zIndex: 1,
            padding: 2,
          }}
        > 
        <Box sx={{ p: 4, fontSize: '2rem', marginBottom: 2, marginTop :'15px' ,height: 'auto',marginLeft: '100px'}}  >
          <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '60px', fontFamily: 'Montserrat', textAlign: 'left', color: 'white', fontSize: 50}}>
            Our Mission
          </Typography>
        </Box>
      </TransitionBox>
      {/* Mission Section */}
      <Box ref={missionRef} data-section="mission" sx={{ padding: '5px 0px',backgroundColor: 'white' }}>
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={3} >
              <Box component="img" src={missionImage}   sx={{ p: 4, fontSize: '2rem', marginBottom: 2, marginTop :'15px' ,height: '350px',marginLeft: '50px' ,marginRight: { xs: 8 , sm: 0 }}  }  >
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={7}>
                <Typography
                  variant="h6"
                  sx={{
                  fontFamily: 'Montserrat',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '20px',
                  maxWidth: '80%',
                  margin: '0 auto',
                  }}
                >
                  {missionContent1} {missionContent2}
                </Typography>
            </Grid>
        </Grid>
      </Box>
      {/* spacer 2 */}
      <TransitionBox
          ref={spacer2}
          data-section="spacer2"
          className={visibleSections.spacer2 ? 'visible' : ''}
          sx={{
            height: 'auto',
            color: 'white',
            textAlign: 'center',
            zIndex: 1,
            padding: 2,
          }}
        > 
        <Box sx={{ p: 4, fontSize: '2rem', marginBottom: 2, marginTop :'15px' ,height: 'auto',marginLeft: '100px'}}  >
          <Typography variant="h1" sx={{ marginRight:24, fontSize: '2rem', fontWeight: 'bold', marginTop: '60px', fontFamily: 'Montserrat', textAlign: 'right', color: 'white', fontSize: 50}}>
            Our Vission
          </Typography>
        </Box>
      </TransitionBox>
      {/* Vision Section */}
      <Box ref={visionRef} data-section="vission" sx={{ padding: '5px 0px',backgroundColor: 'white' }}>
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4} md={7}>
                <Typography
                  variant="h6"
                  sx={{
                  fontFamily: 'Montserrat',
                  color: 'black',
                  fontWeight: 'bold',
                  padding: '20px',
                  maxWidth: '80%',
                  margin: '0 auto',
                  }}
                >
                  {missionContent1} {missionContent2}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} >
              <Box component="img" src={VissionImage}   sx={{ p: 4, fontSize: '2rem', marginBottom: 2, marginTop :'15px' ,height: '350px',marginLeft: {xs:5 ,sm :-20 },marginRight: { xs: 8 , sm: 0 }}  }  >
              </Box>
            </Grid>
        </Grid>
      </Box>
      {/* spacer 3 */}
      <TransitionBox
          ref={spacer3}
          data-section="spacer3"
          className={visibleSections.spacer3 ? 'visible' : ''}
          sx={{
            height: 'auto',
            color: 'white',
            textAlign: 'center',
            zIndex: 1,
            padding: 2,
          }}
        > 
        <Box sx={{ p: 4, fontSize: '2rem', marginBottom: 2, marginTop :'15px' ,height: 'auto',marginLeft: '100px'}}  >
          <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '60px', fontFamily: 'Montserrat', textAlign: 'left', color: 'white', fontSize: 50}}>
            Our Services
          </Typography>
        </Box>
      </TransitionBox>
      {/* Services */}
      <Box ref={serviceRef} data-section="vission" sx={{ padding: '5px 0px',backgroundColor: 'white' }}>
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            justifyContent="center"
            alignItems="center"
            marginTop={1}
          >
        <ImageList
          sx={{
            width: 1600,
            height:   700,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
          }}
          rowHeight={200}
          gap={1}
        >
          {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                      {...srcset(item.img, 250, 200, rows, cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          aria-label={`star ${item.title}`}
                        >
                          <StarBorderIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Grid>
      </Box>
    </Box>
  );
};

export default Home;
