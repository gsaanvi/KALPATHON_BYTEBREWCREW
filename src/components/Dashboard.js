import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  styled
} from '@mui/material';
import { green, red } from '@mui/material/colors';
import { 
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  AccessTime as AccessTimeIcon,
  TrendingUp as TrendingUpIcon,
  Web as WebIcon,
  Warning as WarningIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: '#EEF4ED',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const ProgressCircle = styled(CircularProgress)({
  color: green[500],
});

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(8, 2),
  background: '#EEF4ED',
  marginBottom: theme.spacing(8),
}));

const Dashboard = () => {
  const weeklyProgress = 75;
  const productivePoints = 120;
  const distractionPoints = 45;
  const mostProductiveSites = [
    { name: 'github.com', time: '2h 30m' },
    { name: 'stackoverflow.com', time: '1h 45m' },
    { name: 'leetcode.com', time: '1h 15m' }
  ];
  const distractionSites = [
    { name: 'youtube.com', time: '45m' },
    { name: 'instagram.com', time: '30m' },
    { name: 'twitter.com', time: '20m' }
  ];

  return (
    <Box sx={{ 
      p: 3, 
      display: 'flex', 
      flexDirection: 'column',
      gap: 4,
      minHeight: '100vh',
      overflowY: 'auto'
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 6,
        animation: 'fadeIn 1s ease-in'
      }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 800,
            mb: 2,
            fontFamily: 'Poppins, sans-serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            letterSpacing: '0.02em',
            color: '#0B2545',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            lineHeight: 1.2
          }}
        >
          PausePanda: Your Ultimate Focus Companion!
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: '#13315C',
            mb: 4,
            fontFamily: 'Poppins, sans-serif',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6
          }}
        >
          Join a Community of Amazing People Who Block Distractions and Embrace a Happier, Healthier, and More Productive Life.
        </Typography>
        <Button 
          component={RouterLink}
          to="/timer"
          variant="contained" 
          size="large"
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
          Get Started
        </Button>
      </Box>

      {/* Weekly Progress */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" sx={{ mb: 3, color: '#0B2545' }}>
          Weekly Progress
        </Typography>
        <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
          <ProgressCircle variant="determinate" value={75} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" component="div" color="#0B2545">
              75%
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ color: '#0B2545' }}>
          You're on track! Keep up the good work.
        </Typography>
      </StyledPaper>

      {/* Points Summary */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" sx={{ mb: 3, color: '#0B2545' }}>
          Points Summary
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: green[600] }}>
              Productive Points
            </Typography>
            <Typography variant="h4" sx={{ color: green[600] }}>
              450
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: red[600] }}>
              Distraction Points
            </Typography>
            <Typography variant="h4" sx={{ color: red[600] }}>
              120
            </Typography>
          </Box>
        </Box>
        <Typography variant="body1" sx={{ color: '#0B2545' }}>
          Net Score: +330
        </Typography>
      </StyledPaper>

      {/* Most Productive Sites */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" sx={{ mb: 3, color: '#0B2545' }}>
          Most Productive Sites
        </Typography>
        <List>
          {mostProductiveSites.map((site, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: green[600] }} />
              </ListItemIcon>
              <ListItemText 
                primary={site.name} 
                secondary={`${site.time} minutes`}
                primaryTypographyProps={{ color: '#0B2545' }}
                secondaryTypographyProps={{ color: '#0B2545' }}
              />
            </ListItem>
          ))}
        </List>
      </StyledPaper>

      {/* Distraction Sites */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" sx={{ mb: 3, color: '#0B2545' }}>
          Distraction Sites
        </Typography>
        <List>
          {distractionSites.map((site, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <WarningIcon sx={{ color: red[600] }} />
              </ListItemIcon>
              <ListItemText 
                primary={site.name} 
                secondary={`${site.time} minutes`}
                primaryTypographyProps={{ color: '#0B2545' }}
                secondaryTypographyProps={{ color: '#0B2545' }}
              />
            </ListItem>
          ))}
        </List>
      </StyledPaper>
    </Box>
  );
};

export default Dashboard; 