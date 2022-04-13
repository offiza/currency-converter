import { AppBar, Box, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { useGetCurrencyBetweenTwo } from '../../hooks/useGetCurrencyBetweenTwo';

export const NavBar = () => {
  const currencyEUR = useGetCurrencyBetweenTwo('UAH', 'EUR');
  const currencyUSD = useGetCurrencyBetweenTwo('UAH', 'USD');

  return (
    <AppBar position="static" color='secondary' sx={{ padding: '20px'}} >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
        <Typography variant="h6" color='primary' sx={{ fontWeight: '600' }}>
          Currency Converter
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {!currencyEUR.isLoading ?
            < Typography color='primary' sx={{ mr: '10px'}}>EUR: {(1 / currencyEUR.currency).toFixed(2)}</Typography>
            :
            <Skeleton variant="text" width={80} height={40} sx={{ mr: '10px' }} />
          }
          {!currencyEUR.isLoading ?
            <Typography color='primary'>USD: {(1 / currencyUSD.currency).toFixed(2)}</Typography>
            :
            <Skeleton variant="text" width={80} height={40} />
          }
        </Box>
      </Box>
    </AppBar >
  )
} 