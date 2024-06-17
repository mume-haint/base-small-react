import CssBaseline from '@mui/material/CssBaseline';
import {ReactNode, useMemo} from 'react';
import {ThemeOptions, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';

import {palette} from './palette';
import {shadows} from './shadows';
import {overrides} from './overrides';
import {typography} from './typography';
import {customShadows} from './custom-shadows.js';
import {createTheme} from "@mui/material";

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const memoizedValue: ThemeOptions = useMemo(
        () => ({
            palette: palette(),
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
            shape: { borderRadius: 8 },
        }),
        []
    );

    const theme = createTheme(memoizedValue);

    theme.components = overrides(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
