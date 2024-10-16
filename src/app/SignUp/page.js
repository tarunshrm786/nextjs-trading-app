// "use client";
// import React from 'react';
// import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';
// import Header from '../../components/Header';  // Assuming the correct path to your Header component
// import Footer from '../../components/Footer';  // Assuming the correct path to your Footer component

// function SignUp() {
//   // State to manage selected account type
//   const [accountType, setAccountType] = React.useState('individual');

//   // Handler to change account type
//   const handleAccountTypeChange = (event) => {
//     setAccountType(event.target.value);
//   };

//   return (
//     <>
//       <Header />
//       <Box
//         sx={{
//           backgroundColor: 'white', // Dark background
//           minHeight: '100vh', // Full screen height
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: '20px',
//           marginTop: { xs: '90px', md: '80px' },  // Adjust margin for responsiveness
//         }}
//       >
//         <Container maxWidth="lg">
//           <Grid container spacing={0}>
//             {/* Left side: Image */}
//             <Grid
//               item
//               xs={12}
//               md={6}
//               sx={{
//                 backgroundImage: 'url("/images/signup.jpg")', // Replace with your image path
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 minHeight: '600px', // Adjust height as needed
//               }}
//             />

//             {/* Right side: Sign-up form */}
//             <Grid
//               item
//               xs={12}
//               md={6}
//               sx={{
//                 padding: { xs: 2, md: 4 },
//                 backgroundColor: 'white', // Dark gray background
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 minHeight: '600px', // Match height with image
//                 color: 'black'
//               }}
//             >
//               <Typography
//                 variant="h4"
//                 component="h1"
//                 align="center"
//                 sx={{ marginBottom: 3, color: 'black', fontWeight: 'bold' }}
//               >
//                 Create Your Trading Account
//               </Typography>

//               <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 {/* Full Name Field */}
//                 <TextField
//                   variant="outlined"
//                   label="Full Name"
//                   type="text"
//                   fullWidth
//                   required
//                   InputLabelProps={{ style: { color: 'black' } }}
//                   InputProps={{
//                     style: { color: 'black' },
//                     sx: {
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': { borderColor: '#fff' },
//                         '&:hover fieldset': { borderColor: '#ccc' },
//                         '&.Mui-focused fieldset': { borderColor: '#fff' },
//                       },
//                     },
//                   }}
//                 />

//                 {/* Email Field */}
//                 <TextField
//                   variant="outlined"
//                   label="Email"
//                   type="email"
//                   fullWidth
//                   required
//                   InputLabelProps={{ style: { color: 'black' } }}
//                   InputProps={{
//                     style: { color: 'black' },
//                     sx: {
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': { borderColor: '#fff' },
//                         '&:hover fieldset': { borderColor: '#ccc' },
//                         '&.Mui-focused fieldset': { borderColor: '#fff' },
//                       },
//                     },
//                   }}
//                 />

//                 {/* Username Field */}
//                 <TextField
//                   variant="outlined"
//                   label="Username"
//                   type="text"
//                   fullWidth
//                   required
//                   InputLabelProps={{ style: { color: 'black' } }}
//                   InputProps={{
//                     style: { color: 'black' },
//                     sx: {
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': { borderColor: '#fff' },
//                         '&:hover fieldset': { borderColor: '#ccc' },
//                         '&.Mui-focused fieldset': { borderColor: '#fff' },
//                       },
//                     },
//                   }}
//                 />

//                 {/* Password Field */}
//                 <TextField
//                   variant="outlined"
//                   label="Password"
//                   type="password"
//                   fullWidth
//                   required
//                   InputLabelProps={{ style: { color: 'black' } }}
//                   InputProps={{
//                     style: { color: 'black' },
//                     sx: {
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': { borderColor: '#fff' },
//                         '&:hover fieldset': { borderColor: '#ccc' },
//                         '&.Mui-focused fieldset': { borderColor: '#fff' },
//                       },
//                     },
//                   }}
//                 />

//                 {/* Confirm Password Field */}
//                 <TextField
//                   variant="outlined"
//                   label="Confirm Password"
//                   type="password"
//                   fullWidth
//                   required
//                   InputLabelProps={{ style: { color: 'black' } }}
//                   InputProps={{
//                     style: { color: 'black' },
//                     sx: {
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': { borderColor: '#fff' },
//                         '&:hover fieldset': { borderColor: '#ccc' },
//                         '&.Mui-focused fieldset': { borderColor: '#fff' },
//                       },
//                     },
//                   }}
//                 />

//                 {/* Phone Number Field */}
//                 <TextField
//                   variant="outlined"
//                   label="Phone Number"
//                   type="text"
//                   fullWidth
//                   required
//                   InputLabelProps={{ style: { color: 'black' } }}
//                   InputProps={{
//                     style: { color: 'black' },
//                     sx: {
//                       '& .MuiOutlinedInput-root': {
//                         '& fieldset': { borderColor: '#fff' },
//                         '&:hover fieldset': { borderColor: '#ccc' },
//                         '&.Mui-focused fieldset': { borderColor: '#fff' },
//                       },
//                     },
//                   }}
//                 />

//                 {/* Submit Button */}
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{
//                     marginTop: 3,
//                     backgroundColor: '#fff',
//                     color: 'black',
//                     '&:hover': { backgroundColor: '#ccc' },
//                   }}
//                 >
//                   Sign Up
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//       <Footer />
//     </>
//   );
// }

// export default SignUp;

"use client";
import React from 'react';
import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';
import Header from '../../components/Header';  // Assuming the correct path to your Header component
import Footer from '../../components/Footer';  // Assuming the correct path to your Footer component

function SignUp() {
  // State to manage selected account type
  const [accountType, setAccountType] = React.useState('individual');

  // Handler to change account type
  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: 'white', 
          minHeight: '100vh', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          marginTop: { xs: '90px', md: '80px' },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            {/* Right side: Sign-up form first for small screens */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                padding: { xs: 2, md: 4 },
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '600px', 
                color: 'black',
                order: { xs: 1, md: 1 },  // Order changes for small screens
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{ marginBottom: 3, color: 'black', fontWeight: 'bold' }}
              >
                Create Your Trading Account
              </Typography>

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Full Name Field */}
                <TextField
                  variant="outlined"
                  label="Full Name"
                  type="text"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{
                    style: { color: 'black' },
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#ccc' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    },
                  }}
                />

                {/* Email Field */}
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{
                    style: { color: 'black' },
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#ccc' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    },
                  }}
                />

                {/* Username Field */}
                <TextField
                  variant="outlined"
                  label="Username"
                  type="text"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{
                    style: { color: 'black' },
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#ccc' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    },
                  }}
                />

                {/* Password Field */}
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{
                    style: { color: 'black' },
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#ccc' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    },
                  }}
                />

                {/* Confirm Password Field */}
                <TextField
                  variant="outlined"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{
                    style: { color: 'black' },
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#ccc' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    },
                  }}
                />

                {/* Phone Number Field */}
                <TextField
                  variant="outlined"
                  label="Phone Number"
                  type="text"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: 'black' } }}
                  InputProps={{
                    style: { color: 'black' },
                    sx: {
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: '#fff' },
                        '&:hover fieldset': { borderColor: '#ccc' },
                        '&.Mui-focused fieldset': { borderColor: '#fff' },
                      },
                    },
                  }}
                />

                {/* Submit Button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: 3,
                    backgroundColor: '#fff',
                    color: 'black',
                    '&:hover': { backgroundColor: '#ccc' },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </Grid>

            {/* Left side: Image second for small screens */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundImage: 'url("/images/signup.jpg")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '600px', 
                order: { xs: 1, md: 2 },  // Order changes for small screens
                marginBottom: { xs: 2, md: 0 }, // Adds margin for small screens
              }}
            />
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default SignUp;
