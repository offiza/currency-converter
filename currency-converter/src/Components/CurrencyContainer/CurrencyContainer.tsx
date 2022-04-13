import { Box, Typography } from '@mui/material';
import React, { FC, useState, useEffect } from 'react';
import { CurrencyRow } from '../CurrencyRow/CurrencyRow';
import axios from 'axios';

const CURRENCY_URL = 'https://v6.exchangerate-api.com/v6/f0e875cd1f978365b0ce36b2';

export const CurrencyContainer = () => {
  const [currencies, setCurrencies] = useState<any>([])
  const [fromCurrency, setFromCurrency] = useState<any>()
  const [toCurrency, setToCurrency] = useState<any>()
  const [exchangeRate, setExchangeRate] = useState(1)
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [error, setError] = useState('');

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    axios
      .get(`${CURRENCY_URL}latest/UAH`)
      .then(respone => {
        console.log([...Object.keys(respone.data.conversion_rates)][0])
        setCurrencies([...Object.keys(respone.data.conversion_rates)]);
        setFromCurrency([...Object.keys(respone.data.conversion_rates)][0]);
        setToCurrency([...Object.keys(respone.data.conversion_rates)][5]);
      })
      .catch((error) => {
        setError(error.message);
      })
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      axios(`${CURRENCY_URL}/pair/${fromCurrency}/${toCurrency}`)
        .then(response => {
          setExchangeRate(response.data.conversion_rate);
        })
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e: any) {
    if (parseInt(e.target.value) >= 0)
      setAmount(parseInt(e.target.value))
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e: any) {
    if (parseInt(e.target.value) >= 0)
      setAmount(parseInt(e.target.value))
    setAmountInFromCurrency(false)
  }

  return (
    <Box sx={{ width: { sm: 'min(80%, 700px)', xs: '100%' }, border: { sm: '1px solid gray', xs: 'none' }, margin: 'auto' }}>
      <Box sx={{ padding: '10px', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
          Currency Converter
        </Typography>
      </Box>
      {!error ?
        <Box>
          <CurrencyRow
            currencies={currencies}
            selectedCurrency={fromCurrency}
            handleChange={(e: any) => setFromCurrency(e.target.value)}
            amount={fromAmount}
            handleAmount={handleFromAmountChange} />
          <CurrencyRow
            currencies={currencies}
            selectedCurrency={toCurrency}
            handleChange={(e: any) => setToCurrency(e.target.value)}
            amount={toAmount}
            handleAmount={handleToAmountChange} />
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