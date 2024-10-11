// import React from 'react';
// import Header from '../../components/Header'; // Adjust the path to your Header component
// import Footer from '../../components/Footer'; // Adjust the path to your Footer component
// import { Box, Typography, Card, Avatar, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


// const PricingSection = () => {
//   const cardData = [
//     {
//       title: 'Basic Plan',
//       subtext: 'Perfect for beginners to start trading.',
//       price: '$10/month',
//       icon: '/images/bitcoin.png', // Replace with your own icon path
//     },
//     {
//       title: 'Standard Plan',
//       subtext: 'Great for intermediate traders.',
//       price: '$30/month',
//       icon: '/images/bitcoin.png', // Replace with your own icon path
//     },
//     {
//       title: 'Premium Plan',
//       subtext: 'Advanced tools for experienced traders.',
//       price: '$50/month',
//       icon: '/images/bitcoin.png', // Replace with your own icon path
//     },
//     {
//       title: 'Enterprise Plan',
//       subtext: 'For institutions and high-volume traders.',
//       price: '$100/month',
//       icon: '/images/bitcoin.png', // Replace with your own icon path
//     },
//   ];

//     // Feature table data
//     const tableData = [
//         { feature: 'Live Market Data', basic: 'Limited', standard: 'Unlimited', premium: 'Unlimited', enterprise: 'Unlimited' },
//         { feature: 'Real-Time Alerts', basic: 'No', standard: 'Yes', premium: 'Yes', enterprise: 'Yes' },
//         { feature: 'Advanced Charting Tools', basic: 'No', standard: 'Limited', premium: 'Yes', enterprise: 'Yes' },
//         { feature: 'Customer Support', basic: 'Email', standard: 'Phone & Email', premium: '24/7 Support', enterprise: 'Dedicated Manager' },
//         { feature: 'API Access', basic: 'No', standard: 'No', premium: 'Yes', enterprise: 'Yes' },
//         { feature: 'Monthly Trading Limit', basic: '$10,000', standard: '$100,000', premium: '$500,000', enterprise: 'Unlimited' },
//       ];

//   return (
//     <>
//       {/* Header */}
//       <Header />

//       {/* Pricing Section */}
//       <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
//         <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 2, color: '#fff' }}>
//           Experience More at Industry Standard Prices
//         </Typography>
//         <Typography variant="h6" sx={{ mb: 4, color: '#ddd' }}>
//           Incredible stock trading & investing at industry standard prices.
//         </Typography>

//         <Grid container spacing={4} justifyContent="center">
//           {cardData.map((card, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{ height: '100%', backgroundColor: '#fff' }}>
//                 <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                   {/* Icon Image */}
//                   <Avatar 
//                     alt={card.title} 
//                     src={card.icon} 
//                     sx={{ width: 64, height: 64, mb: 2 }} // Adjust size and margin here
//                   />
                  
//                   {/* Card Title */}
//                   <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
//                     {card.title}
//                   </Typography>
                  
//                   {/* Card Subtext */}
//                   <Typography variant="body2" sx={{ mb: 4, textAlign: 'center' }}>
//                     {card.subtext}
//                   </Typography>
                  
//                   {/* Card Price */}
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 'auto' }}>
//                     {card.price}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Pricing Features Table */}
//         <Box sx={{ mt: 6 }}>
//           <Typography variant="h4" sx={{ mb: 3, color: '#fff' }}>
//             Compare Our Pricing Plans
//           </Typography>
//           {/* ... Table code as previously provided ... */}
//           <TableContainer component={Paper} sx={{ backgroundColor: '#222' }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Features</TableCell>
//                   <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Basic</TableCell>
//                   <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Standard</TableCell>
//                   <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Premium</TableCell>
//                   <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Enterprise</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {tableData.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell sx={{ color: '#ddd' }}>{row.feature}</TableCell>
//                     <TableCell sx={{ color: '#ddd' }}>{row.basic}</TableCell>
//                     <TableCell sx={{ color: '#ddd' }}>{row.standard}</TableCell>
//                     <TableCell sx={{ color: '#ddd' }}>{row.premium}</TableCell>
//                     <TableCell sx={{ color: '#ddd' }}>{row.enterprise}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//         </Box>
//       </Box>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default PricingSection;

import React from 'react';
import Header from '../../components/Header'; // Adjust the path to your Header component
import Footer from '../../components/Footer'; // Adjust the path to your Footer component
import { Box, Typography, Card, Avatar, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PricingSection = () => {
  const cardData = [
    {
      title: 'Basic Plan',
      subtext: 'Perfect for beginners to start trading.',
      price: '$10/month',
      icon: '/images/bitcoin.png', // Replace with your own icon path
    },
    {
      title: 'Standard Plan',
      subtext: 'Great for intermediate traders.',
      price: '$30/month',
      icon: '/images/bitcoin.png', // Replace with your own icon path
    },
    {
      title: 'Premium Plan',
      subtext: 'Advanced tools for experienced traders.',
      price: '$50/month',
      icon: '/images/bitcoin.png', // Replace with your own icon path
    },
    {
      title: 'Enterprise Plan',
      subtext: 'For institutions and high-volume traders.',
      price: '$100/month',
      icon: '/images/bitcoin.png', // Replace with your own icon path
    },
  ];

  // Feature table data
  const tableData = [
    { feature: 'Live Market Data', basic: 'Limited', standard: 'Unlimited', premium: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Real-Time Alerts', basic: 'No', standard: 'Yes', premium: 'Yes', enterprise: 'Yes' },
    { feature: 'Advanced Charting Tools', basic: 'No', standard: 'Limited', premium: 'Yes', enterprise: 'Yes' },
    { feature: 'Customer Support', basic: 'Email', standard: 'Phone & Email', premium: '24/7 Support', enterprise: 'Dedicated Manager' },
    { feature: 'API Access', basic: 'No', standard: 'No', premium: 'Yes', enterprise: 'Yes' },
    { feature: 'Monthly Trading Limit', basic: '$10,000', standard: '$100,000', premium: '$500,000', enterprise: 'Unlimited' },
  ];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Pricing Section */}
      <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
        <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 4, mt: 10, color: '#fff' }}>
          Experience More at Industry Standard Prices
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#ddd' }}>
          Incredible stock trading & investing at industry standard prices.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', backgroundColor: '#fff' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Icon Image with hover effect */}
                  <Avatar 
                    alt={card.title} 
                    src={card.icon} 
                    sx={{ 
                      width: 64, 
                      height: 64, 
                      mb: 2, 
                      transition: 'transform 0.3s ease-in-out', 
                      '&:hover': { 
                        transform: 'scale(1.2)' 
                      } 
                    }} 
                  />
                  
                  {/* Card Title */}
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {card.title}
                  </Typography>
                  
                  {/* Card Subtext */}
                  <Typography variant="body2" sx={{ mb: 4, textAlign: 'center' }}>
                    {card.subtext}
                  </Typography>
                  
                  {/* Card Price */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 'auto' }}>
                    {card.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pricing Features Table */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 3, color: '#fff' }}>
            Compare Our Pricing Plans
          </Typography>
          <TableContainer component={Paper} sx={{ backgroundColor: '#222' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Features</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Basic</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Standard</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Premium</TableCell>
                  <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Enterprise</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: '#ddd' }}>{row.feature}</TableCell>
                    <TableCell sx={{ color: '#ddd' }}>{row.basic}</TableCell>
                    <TableCell sx={{ color: '#ddd' }}>{row.standard}</TableCell>
                    <TableCell sx={{ color: '#ddd' }}>{row.premium}</TableCell>
                    <TableCell sx={{ color: '#ddd' }}>{row.enterprise}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PricingSection;
