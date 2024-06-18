import {forwardRef, HTMLAttributes} from 'react';
import {Icon, IconifyIcon} from '@iconify/react';
import {Box} from '@mui/material';
import {BoxProps} from "@mui/material/Box";

interface IconifyProps extends HTMLAttributes<SVGSVGElement> {
    icon: string | IconifyIcon;
    sx?: BoxProps['sx'];
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
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
