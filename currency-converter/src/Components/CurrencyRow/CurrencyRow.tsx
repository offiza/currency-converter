import { Box, TextField } from '@mui/material';
import React, { FC } from 'react';

interface CurrencyRowProps {
  currencies: any[];
  selectedCurrency: any;
  amount: Number;
  handleChange: (e: any) => void;
  handleAmount: (e: any) => void
}

export const CurrencyRow: FC<CurrencyRowProps> = ({ currencies, selectedCurrency, handleChange, amount, handleAmount }) => {

  return (
    <Box sx={{ display: 'flex', margin: '10px' }}>
      <TextField
        fullWidth
        type='number'
        variant='outlined'
        sx={{ marginRight: '10px' }}
        value={amount}
        onChange={(e) => handleAmount(e)} />
      <select value={selectedCurrency} onChange={handleChange}>
        {currencies &&
          currencies.map(currency => {
            return currency && <option value={currency} key={currency}>{currency}</option>
          })
        }
      </select>
    </Box>
  )
} 