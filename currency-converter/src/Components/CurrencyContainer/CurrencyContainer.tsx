import { Box, Skeleton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CurrencyRow } from '../CurrencyRow/CurrencyRow';
import { useCurrensy } from '../../hooks/useCurrensy';
import { useGetCurrencyBetweenTwo } from '../../hooks/useGetCurrencyBetweenTwo';

export const CurrencyContainer = () => {
  const { currencies, error } = useCurrensy();
  const [fromCurrency, setFromCurrency] = useState<any>('UAH');
  const [toCurrency, setToCurrency] = useState<any>('USD');
  const { currency, isLoading } = useGetCurrencyBetweenTwo(fromCurrency, toCurrency);

  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * currency
  } else {
    toAmount = amount
    fromAmount = amount / currency
  }

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

  if (isLoading) {
    return (
      <Skeleton variant='rectangular' height={270} sx={{ width: { sm: 'min(80%, 500px)', xs: '100%' }, margin: 'auto' }} />
    )
  }

  return (
    <Box
      sx={{
        width: { sm: 'min(80%, 500px)', xs: '100%' },
        border: { sm: '1px solid gray', xs: 'none' },
        margin: 'auto', paddingBottom: '10px',
        borderRadius: '10px',
        backgroundColor: '#bbb'
      }}>
      <Box sx={{ padding: '25px', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: '600' }} color='primary'>
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