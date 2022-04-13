import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const NavBar = () => {
  return (
    <AppBar position="static" sx={{padding: '10px'}}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" >
          Currency Converter
        </Typography>
      </Toolbar>
    </AppBar>
  )
} 