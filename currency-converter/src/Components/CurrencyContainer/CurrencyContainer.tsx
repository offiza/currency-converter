import { Box, Typography } from '@mui/material';
import React from 'react';
import { CurrencyRow } from '../CurrencyRow/CurrencyRow';

export const CurrencyContainer = () => {

  return (
    <Box sx={{ width: { sm: 'min(80%, 700px)', xs: '100%' }, border: { sm: '1px solid gray', xs: 'none' }, margin: 'auto', padding: '0 20px 20px' }}>
      <Box sx={{ padding: '10px', textAlign: 'center' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
          Currency Converter
        </Typography>
      </Box>
      <Box>
        <CurrencyRow />
        <CurrencyRow />
      </Box>
    </Box>

  )
}