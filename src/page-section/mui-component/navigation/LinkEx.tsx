import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
};

export default function LinkEx() {
    return (
        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) ~ :not(style)': {
                    ml: 2,
                },
            }}
            onClick={preventDefault}
        >
            <Link href="#">Link</Link>
            <Link href="#" color="inherit">
                {'color="inherit"'}
            </Link>
            <Link href="#" variant="body2">
                {'variant="body2"'}
            </Link>
        </Box>
    );
}
