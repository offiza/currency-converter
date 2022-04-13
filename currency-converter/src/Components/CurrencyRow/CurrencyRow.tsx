import { Box, Select, TextField } from '@mui/material';
import React from 'react';

export const CurrencyRow = () => {
  return (
    <Box sx={{ display: 'flex', margin: '10px' }}>
      <TextField fullWidth variant='outlined' sx={{marginRight: '10px'}}/>
      <Select />
    </Box>
  )
} 