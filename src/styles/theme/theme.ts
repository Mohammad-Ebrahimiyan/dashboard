import { createTheme, Theme } from '@mui/material/styles';

const basePalette = {
  primary: {
    main: '#f4511e',
  },
  secondary: {
    main: '#1565c0',
  },
};

const baseTypography = {
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
};

// Light Theme
export const lightTheme: Theme = createTheme({
  palette: {
    ...basePalette,
    mode: 'light',
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
  },
  ...baseTypography,
});

// Dark Theme
export const darkTheme: Theme = createTheme({
  palette: {
    ...basePalette,
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  ...baseTypography,
});
