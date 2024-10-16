import React from 'react';
import { Box, Button, TextField, Typography, Container, Paper, Grid } from '@mui/material';
import Header from '../../components/Header';  // Assuming the correct path
import Footer from '../../components/Footer';  // Assuming the correct path

function Login() {
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: 'white', // Light background color for contrast
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 0',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={0.5} justifyContent="center" alignItems="stretch">
            {/* Left Column: Image with Text */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', marginTop: '85px' }}>
              {/* <Paper 
                elevation={5} 
                sx={{ 
                  padding: '40px', 
                  borderRadius: '0px', 
                  backgroundColor: '#fff', 
                  textAlign: 'center',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // 3D effect
                  border: '1px solid #ccc',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Vertically center content
                }}
              >
                <Box component="img" 
                  src="/images/laptop.jpg" // Update with your image path
                  alt="Sample Image" 
                  sx={{ 
                    width: '100%', 
                    borderRadius: '10px', 
                    marginBottom: '20px' 
                  }}
                />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Welcome to Our Trading Platform
                </Typography>
                <Typography variant="body1">
                Unlock your path to financial freedom and smarter investments. Whether you're a seasoned trader or just starting out, we provide the tools and insights to help you grow. Join us and trade with confidence, powered by real-time data and expert analysis.
                </Typography>
              </Paper> */}

<Paper 
  elevation={5} 
  sx={{ 
    padding: '40px', 
    borderRadius: '0px', 
    backgroundColor: '#fff', 
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // 3D effect
    border: '1px solid #ccc',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Vertically center content
  }}
>
  <Box component="img" 
    src="/images/laptop.jpg" // Update with your image path
    alt="Sample Image" 
    sx={{ 
      width: '100%', 
      borderRadius: '10px', 
      marginBottom: '20px' 
    }}
  />
  <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
    Welcome to Our Trading Platform
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: '20px' }}>
    Unlock your path to financial freedom and smarter investments. Whether you're a seasoned trader or just starting out, we provide the tools and insights to help you grow. Join us and trade with confidence, powered by real-time data and expert analysis.
  </Typography>
  <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
    Download the mobile app
  </Typography>
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
    <Box component="img" 
      src="/images/playstore.svg" // Update with Google Play logo path
      alt="Download on Google Play"
      sx={{ width: '150px' }} 
    />
    <Box component="img" 
      src="/images/appstore.svg" // Update with App Store logo path
      alt="Download on the App Store"
      sx={{ width: '150px' }} 
    />
  </Box>
</Paper>


            </Grid>

            {/* Right Column: Login Form */}
            <Grid item xs={12} md={6} sx={{ display: 'flex',    marginTop: { xs: '10px', md: '85px' } }}>
              <Paper 
                elevation={5} 
                sx={{ 
                  padding: '80px', 
                  borderRadius: '0px', 
                  backgroundColor: '#333',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // 3D effect
                  border: '1px solid #555',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Vertically center content
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  align="center"
                  sx={{ marginBottom: 3, color: '#fff', fontWeight: 'bold' }}
                >
                  Login to Your Account
                </Typography>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    variant="outlined"
                    label="Username or Email"
                    type="text"
                    fullWidth
                    InputLabelProps={{ style: { color: '#fff' } }} // Label color
                    InputProps={{
                      style: { color: '#fff' }, // Text color
                      sx: {
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#fff', // Border color
                          },
                          '&:hover fieldset': {
                            borderColor: '#ccc', // Hover color
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#fff', // Focus color
                          },
                        },
                      },
                    }}
                  />

                  <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    fullWidth
                    InputLabelProps={{ style: { color: '#fff' } }} // Label color
                    InputProps={{
                      style: { color: '#fff' }, // Text color
                      sx: {
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#fff', // Border color
                          },
                          '&:hover fieldset': {
                            borderColor: '#ccc', // Hover color
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#fff', // Focus color
                          },
                        },
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      marginTop: 3,
                      backgroundColor: '#fff',
                      color: '#000',
                      '&:hover': { backgroundColor: '#ccc' },
                    }}
                  >
                    Login
                  </Button>

                  <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                    <Typography variant="body2" sx={{ color: '#fff' }}>
                      <a href="#" style={{ textDecoration: 'underline', color: '#fff' }}>
                        Forgot Password?
                      </a>
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#fff', marginTop: 1 }}>
                      <a href="#" style={{ textDecoration: 'underline', color: '#fff' }}>
                        Don't have an account? Sign Up
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Login;
