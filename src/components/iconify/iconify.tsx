import { forwardRef, HTMLAttributes } from 'react';
import { Icon } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';

interface IconifyProps extends HTMLAttributes<HTMLDivElement> {
    icon?: string; // Icon name as a string
    sx?: BoxProps['sx']; // Style prop from BoxProps
    width?: number; // Width of the icon
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(
    ({ icon, width = 20, sx, ...other }, ref) => (
        <Box
            ref={ref}
            component={Icon}
            className="component-iconify"
            icon={icon as any} // Cast to 'any' due to Icon type expectation
            sx={{ width, height: width, ...sx }}
            {...other}
        />
    )
);


export default Iconify;
