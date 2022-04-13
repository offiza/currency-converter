import { Box, Typography } from '@mui/material';
import React, { FC, useState, useEffect } from 'react';
import { CurrencyRow } from '../CurrencyRow/CurrencyRow';
import axios from 'axios';

const CURRENCY_URL = 'https://v6.exchangerate-api.com/v6/f0e875cd1f978365b0ce36b2/latest/UAH';

export const CurrencyContainer = () => {
  const [currencies, setCurrencies] = useState<any>([]);
  const [currencyFrom, setCurrencyFrom] = useState<any>();
  const [currencyTo, setCurrencyTo] = useState<any>();
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(CURRENCY_URL)
      .then(respone => {
        setCurrencies([...Object.keys(respone.data.conversion_rates)]);
        setCurrencyFrom(Object.keys(respone.data.conversion_rates[0]));
        setCurrencyTo(Object.keys(respone.data.conversion_rates[0]));
      })
      .catch((error) => {
        setError(error.message);
      })
  }, []);

  return (
    <Box sx={{ width: { sm: 'min(80%, 700px)', xs: '100%' }, border: { sm: '1px solid gray', xs: 'none' }, margin: 'auto' }}>
      <Box sx={{ padding: '10px', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
          Currency Converter
        </Typography>
      </Box>
      {!error ?
        <Box>
          <CurrencyRow currencies={currencies} selectedCurrency={currencyFrom} />
          <CurrencyRow currencies={currencies} selectedCurrency={currencyTo} />
        </Box>
        :
        <Box sx={{ textAlign: 'center', mt: '30px' }}>
          <Typography sx={{ fontSize: '20px' }}>
            {error}
          </Typography>
        </Box>
      }
    </Box>
  )
}