import React from 'react';
import { Box, Typography, Paper, Button, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
  }
}));

const Rewards = () => {
  return (
    <Box sx={{ 
      p: 3, 
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      minHeight: '100vh',
      backgroundColor: '#EEF4ED'
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 700, 
          color: '#0B2545',
          mb: 4,
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        Your Rewards
      </Typography>

      <StyledPaper elevation={3}>
        <Typography variant="h6" sx={{ mb: 2, color: '#0B2545' }}>
          Available Rewards
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#0B2545' }}>Get Certificates</Typography>
            <Button
              variant="contained"
              sx={{
                background: '#0B2545',
                '&:hover': {
                  background: '#13315C',
                },
                px: 2,
                py: 1,
                borderRadius: 2,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                }
              }}
            >
              Claim
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#0B2545' }}>10 Minutes Break</Typography>
            <Button
              variant="contained"
              sx={{
                background: '#0B2545',
                '&:hover': {
                  background: '#13315C',
                },
                px: 2,
                py: 1,
                borderRadius: 2,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
                }
              }}
            >
              Claim
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      <StyledPaper elevation={3}>
        <Typography variant="h6" sx={{ mb: 2, color: '#0B2545' }}>
          Your Progress
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#0B2545' }}>Points until next reward</Typography>
            <Typography sx={{ color: '#0B2545', fontWeight: 600 }}>150</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#0B2545' }}>Total points earned</Typography>
            <Typography sx={{ color: '#0B2545', fontWeight: 600 }}>850</Typography>
          </Box>
        </Box>
      </StyledPaper>

      <Button
        component={RouterLink}
        to="/dashboard"
        variant="contained"
        sx={{
          background: '#0B2545',
          '&:hover': {
            background: '#13315C',
          },
          px: 4,
          py: 1.5,
          borderRadius: 2,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          }
        }}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default Rewards; 