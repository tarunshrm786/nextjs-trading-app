import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const PricingSection = () => {
  const cardData = [
    {
      title: 'Basic Plan',
      subtext: 'Perfect for beginners to start trading.',
      price: '$10/month',
    },
    {
      title: 'Standard Plan',
      subtext: 'Great for intermediate traders.',
      price: '$30/month',
    },
    {
      title: 'Premium Plan',
      subtext: 'Advanced tools for experienced traders.',
      price: '$50/month',
    },
    {
      title: 'Enterprise Plan',
      subtext: 'For institutions and high-volume traders.',
      price: '$100/month',
    },
  ];

  return (
    <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 2 }}>
        Experience More at Industry Standard Prices
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Incredible stock trading & investing at industry standard prices.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 4 }}>
                  {card.subtext}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 'auto' }}>
                  {card.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingSection;
