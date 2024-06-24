import {forwardRef} from 'react';
import {Icon, IconifyIcon} from '@iconify/react';
import {Box} from '@mui/material';
import {BoxProps} from "@mui/material/Box";

interface IconifyProps extends BoxProps {
    icon: string | IconifyIcon;
    width?: number;
    height?: number;
}


const Iconify = forwardRef<SVGSVGElement, IconifyProps>(
    (
        {
            icon,
            width = 20,
            height = width ?? 20,
            sx,
            ...other
        }, ref) => (
        <Box
            ref={ref}
            component={Icon}
            className="component-iconify"
            icon={icon}
            sx={{width, height, ...sx}}
            {...other}
        />
    )
);


export default Iconify;
