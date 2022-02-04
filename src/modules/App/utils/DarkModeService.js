import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#27272A",
            paper: "#27272A"
        }
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});