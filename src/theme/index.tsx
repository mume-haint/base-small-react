import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, Theme } from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows } from './custom-shadows.js';
import {createTheme} from "@mui/material";

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const memoizedValue = useMemo(
        () => ({
            palette: palette(),
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
            shape: { borderRadius: 8 },
        }),
        []
    );

    const theme: Theme = createTheme(memoizedValue);

    // Assuming overrides function returns a ThemeOptions object
    theme.components = overrides(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
