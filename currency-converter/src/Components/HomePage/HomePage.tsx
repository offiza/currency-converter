import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CurrencyContainer } from '../CurrencyContainer/CurrencyContainer';
import { NavBar } from '../NavBar/NavBar';

const CURRENCY_URL = 'https://v6.exchangerate-api.com/v6/f0e875cd1f978365b0ce36b2/latest/UAH';

export const HomePage = () => {
  const [currencies, setCurrencies] = useState<any>([]);

  useEffect(() => {
    axios
      .get(CURRENCY_URL)
      .then(respone => {
        setCurrencies([...Object.keys(respone.data.conversion_rates)])
      })
  }, []);

  return (
    <Box>
      <NavBar />
      <Box sx={{ margin: '100px auto' }}>
        <CurrencyContainer currencies={currencies} />
      </Box>
    </Box>
  )
} 