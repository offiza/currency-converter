import { Box, MenuItem, Select, TextField } from '@mui/material';
import React, { FC } from 'react';

interface CurrencyRowProps {
  currencies: any[];
}

export const CurrencyRow: FC<CurrencyRowProps> = ({ currencies }) => {

  return (
    <Box sx={{ display: 'flex', margin: '10px' }}>
      <TextField fullWidth variant='outlined' sx={{ marginRight: '10px' }} />
      <Select>
        {currencies &&
          currencies.map<any>(currency => {
            return currency && <MenuItem value={currency} key={currency}>{currency}</MenuItem>
          })
        }
      </Select>
    </Box>
  )
} 