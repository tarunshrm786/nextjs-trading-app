"use client"; // Marking as a client component

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button, Modal, Typography, Box } from '@mui/material';
import { Visibility } from '@mui/icons-material';

const FAQData = [
  {
    question: "What is the support timing?",
    answer: "Our support team is available 24/7 to assist you with any issues."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us through email, phone, or live chat for immediate assistance."
  },
  {
    question: "What services are covered under support?",
    answer: "We provide support for troubleshooting, setup, and maintenance across all our services."
  },
  {
    question: "Is there any additional cost for premium support?",
    answer: "Premium support is available at an additional cost, offering faster response times and dedicated assistance."
  }
];

const Support = () => {
  const [open, setOpen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleOpen = (answer) => {
    setCurrentAnswer(answer);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Header />

      <div style={{ padding: '20px', marginTop: '70px', backgroundColor: 'black', color: 'white', minHeight: '100vh', textAlign: 'center' }}>
        <h1 style={{ marginTop: '50px' }}>Support</h1>

        {/* Text section */}
        <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.6' }}>
          We are committed to providing top-notch support to our customers.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          If you have any questions, please don't hesitate to contact us.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Our team is always here to help you resolve any issues you may face.
        </p>

        {/* Image section */}
        {/* <div style={{ marginTop: '20px' }}>
          <img src="/images/laptop.jpg" alt="Support" 
          style={{ maxWidth: '100%', height: '300px', margin: '0 auto', display: 'block' }} />
        </div> */}
<div style={{ marginTop: '20px' }}>
  <img 
    src="/images/laptop.jpg" 
    alt="Support" 
    loading="lazy"
    style={{ 
      maxWidth: '100%', 
      height: '300px', 
      margin: '0 auto', 
      display: 'block', 
      borderRadius: '25px' // Add border radius here
    }} 
  />
</div>


        {/* FAQ section */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#333', borderRadius: '10px', maxWidth: '800px', margin: '40px auto', textAlign: 'left' }}>
          <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          {FAQData.map((faq, index) => (
            <div key={index} style={{ margin: '20px 0' }}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.question}
                <Button
                  onClick={() => handleOpen(faq.answer)}
                  style={{ marginLeft: '10px', color: 'white', minWidth: '40px' }}
                >
                  <Visibility />
                </Button>
              </h3>
            </div>
          ))}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="faq-answer-title"
          aria-describedby="faq-answer-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
              color: 'black' // Text color black inside the modal
            }}
          >
            <Typography id="faq-answer-title" variant="h6" component="h2">
              Answer
            </Typography>
            <Typography id="faq-answer-description" sx={{ mt: 2 }}>
              {currentAnswer}
            </Typography>
            <Button onClick={handleClose} variant="outlined" style={{ marginTop: '10px' }}>
              Close
            </Button>
          </Box>
        </Modal>
      </div>

      <Footer />
    </>
  );
};

export default Support;
