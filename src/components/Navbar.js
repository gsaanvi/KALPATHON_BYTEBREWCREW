import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#0B2545',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: 0,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Logo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Logo>
            <Avatar 
              src="/panda-logo.png" 
              alt="PausePanda Logo"
              sx={{ 
                width: 40, 
                height: 40,
                backgroundColor: 'white',
                color: '#0B2545'
              }}
            >
              PP
            </Avatar>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.5px',
                background: 'linear-gradient(45deg, #fff 30%, #e0e0e0 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              PausePanda
            </Typography>
          </Logo>
        </Box>
        <Box>
          <StyledButton
            component={RouterLink}
            to="/"
          >
            Dashboard
          </StyledButton>
          <StyledButton
            component={RouterLink}
            to="/timer"
          >
            Timer
          </StyledButton>
          <StyledButton
            component={RouterLink}
            to="/rewards"
          >
            Rewards
          </StyledButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar; 