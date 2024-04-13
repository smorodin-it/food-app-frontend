import { createTheme } from '@mui/material';

export const DefaultTheme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontSize: '100%',
        },
      },
    },
    MuiStack: {
      defaultProps: {
        width: '100%',
        gap: '1.6rem',
        alignItems: 'flex-start',
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
});
