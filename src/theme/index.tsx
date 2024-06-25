import CssBaseline from '@mui/material/CssBaseline';
import {ReactNode, useMemo} from 'react';
import {ThemeOptions, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import {palette} from './palette';
import {shadows} from './shadows';
import {overrides} from './overrides';
import {typography} from './typography';
import {customShadows} from './custom-shadows';
import {createTheme} from "@mui/material";
import useSettings from "src/hooks/useSettings.tsx";

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { themeMode } = useSettings();
  const isLight = themeMode === 'light';

  const memoizedValue: ThemeOptions = useMemo(
        () => ({
            palette: isLight ? palette.light : palette.dark,
            typography,
            shadows: shadows(),
            customShadows: customShadows(),
            shape: { borderRadius: 8 },
        }),
        [isLight]
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
