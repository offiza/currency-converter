import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#072c23',
    },
    secondary: {
      main: '#bbb',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;