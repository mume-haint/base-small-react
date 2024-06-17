import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {HEADER} from './config-layout';
import {ReactNode} from "react";

// ----------------------------------------------------------------------

const SPACING = 8;

interface MainProps {
    children: ReactNode;
    sx?: object;
    [key: string]: unknown;
}

export default function Main({ children, sx, ...other }: MainProps) {

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                minHeight: 1,
                display: 'flex',
                flexDirection: 'column',
                px: 2,
                py: `${HEADER.H_DESKTOP + SPACING}px`,
                ...sx,
            }}
            {...other}
        >
            {children}
        </Box>
    );
}

Main.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};
