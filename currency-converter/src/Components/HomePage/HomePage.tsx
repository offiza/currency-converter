import { Box } from '@mui/material';
import React from 'react';
import { CurrencyContainer } from '../CurrencyContainer/CurrencyContainer';
import { NavBar } from '../NavBar/NavBar';

export const HomePage = () => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ margin: '100px auto' }}>
        <CurrencyContainer />
      </Box>
    </Box>
  )
} 