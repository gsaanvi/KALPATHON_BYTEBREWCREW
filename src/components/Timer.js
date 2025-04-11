import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, TextField, styled } from '@mui/material';
import { green, red } from '@mui/material/colors';

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

const TimerDisplay = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 700,
  color: '#0B2545',
});

const PointsDisplay = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
});

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [productivePoints, setProductivePoints] = useState(0);
  const [distractionPoints, setDistractionPoints] = useState(0);
  const [productiveSites, setProductiveSites] = useState([
    'github.com',
    'stackoverflow.com',
    'leetcode.com',
    'coursera.org',
    'udemy.com',
    'edx.org',
    'khanacademy.org',
    'w3schools.com',
    'freecodecamp.org',
    'codecademy.com'
  ]);
  const [mockUrl, setMockUrl] = useState('');
  const [newProductiveSite, setNewProductiveSite] = useState('');

  const updatePoints = () => {
    if (mockUrl) {
      const isProductive = productiveSites.some(site => mockUrl.includes(site));
      if (isProductive) {
        setProductivePoints(prev => prev + 1);
      } else {
        setDistractionPoints(prev => prev + 1);
      }
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
        updatePoints();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, mockUrl]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    setProductivePoints(0);
    setDistractionPoints(0);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const addProductiveSite = () => {
    if (newProductiveSite && !productiveSites.includes(newProductiveSite)) {
      setProductiveSites([...productiveSites, newProductiveSite]);
      setNewProductiveSite('');
    }
  };

  return (
    <Box sx={{ 
      p: 3, 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      minHeight: '100vh',
      backgroundColor: '#EEF4ED'
    }}>
      {/* Left Column - Timer Box */}
      <Box sx={{ 
        flex: 1, 
        maxWidth: '600px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <StyledPaper elevation={3} sx={{ height: '100%' }}>
          <Typography variant="h5" sx={{ mb: 3, color: '#0B2545' }}>
            PausePanda Timer
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            height: '100%',
            justifyContent: 'space-between'
          }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <TextField
                fullWidth
                label="Enter URL to track"
                variant="outlined"
                value={mockUrl}
                onChange={(e) => setMockUrl(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0B2545',
                    },
                    '&:hover fieldset': {
                      borderColor: '#13315C',
                    },
                  },
                }}
              />
            </Box>
            <TimerDisplay variant="h2">
              {formatTime(time)}
            </TimerDisplay>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={toggleTimer}
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
                {isRunning ? 'Stop' : 'Start'}
              </Button>
              <Button
                variant="outlined"
                onClick={resetTimer}
                sx={{
                  borderColor: '#0B2545',
                  color: '#0B2545',
                  '&:hover': {
                    borderColor: '#13315C',
                    background: 'rgba(19, 49, 92, 0.04)',
                  },
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </StyledPaper>
      </Box>

      {/* Right Column - Points Display */}
      <Box sx={{ 
        flex: 1, 
        maxWidth: '400px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <StyledPaper elevation={3} sx={{ height: '100%' }}>
          <Typography variant="h5" sx={{ mb: 3, color: '#0B2545' }}>
            Points Summary
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            height: '100%',
            justifyContent: 'space-between'
          }}>
            <PointsDisplay>
              <Typography variant="h6" sx={{ color: green[600] }}>
                Productive Points
              </Typography>
              <Typography variant="h4" sx={{ color: green[600] }}>
                {productivePoints}
              </Typography>
            </PointsDisplay>
            <PointsDisplay>
              <Typography variant="h6" sx={{ color: red[600] }}>
                Distraction Points
              </Typography>
              <Typography variant="h4" sx={{ color: red[600] }}>
                {distractionPoints}
              </Typography>
            </PointsDisplay>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ color: '#0B2545' }}>
                Net Score
              </Typography>
              <Typography variant="h4" sx={{ 
                color: (productivePoints - distractionPoints) >= 0 ? green[600] : red[600]
              }}>
                {productivePoints - distractionPoints >= 0 ? '+' : ''}{productivePoints - distractionPoints}
              </Typography>
            </Box>
          </Box>
        </StyledPaper>
      </Box>
    </Box>
  );
};

export default Timer; 