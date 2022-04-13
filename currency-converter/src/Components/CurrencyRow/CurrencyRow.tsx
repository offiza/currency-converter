import { Box, TextField } from '@mui/material';
import React, { FC } from 'react';

interface CurrencyRowProps {
  currencies: any[];
  selectedCurrency: any;
}

export const CurrencyRow: FC<CurrencyRowProps> = ({ currencies, selectedCurrency }) => {

  return (
    <Box sx={{ display: 'flex', margin: '10px' }}>
      <TextField fullWidth variant='outlined' sx={{ marginRight: '10px' }} />
      <select value={selectedCurrency}>
        {currencies &&
          currencies.map(currency => {
            return currency && <option value={currency} key={currency}>{currency}</option>
          })
        }
      </select>
    </Box>
  )
} 