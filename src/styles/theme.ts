import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontFamily: "Asap Condensed, sans-serif",
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#6421ff',
        },
        secondary: {
            main: '#FF732E',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1e1e1e', // Cambia este color según tus preferencias
                },
            },
        },
    },
});

export default theme;