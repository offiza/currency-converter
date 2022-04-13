import { AppBar, Box, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { useGetCurrencyBetweenTwo } from '../../hooks/useGetCurrencyBetweenTwo';

export const NavBar = () => {
  const currencyEUR = useGetCurrencyBetweenTwo('UAH', 'EUR');
  const currencyUSD = useGetCurrencyBetweenTwo('UAH', 'USD');

  return (
    <AppBar position="static" sx={{ padding: '10px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
        <Typography variant="h6" color="inherit" >
          Currency Converter
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {!currencyEUR.isLoading ?
            < Typography sx={{ mr: '10px' }}>EUR: {(1 / currencyEUR.currency).toFixed(2)}</Typography>
            :
            <Skeleton variant="text" width={80} height={40} sx={{ mr: '10px' }} />
          }
          {!currencyEUR.isLoading ?
            <Typography>USD: {(1 / currencyUSD.currency).toFixed(2)}</Typography>
            :
            <Skeleton variant="text" width={80} height={40} />
          }
        </Box>
      </Box>
    </AppBar >
  )
} 