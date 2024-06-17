import {forwardRef, ReactNode, Ref} from 'react';

import {BoxProps} from '@mui/material/Box';

import {StyledRootScrollbar, StyledScrollbar} from './styles';

interface ScrollbarProps extends BoxProps {
    children?: ReactNode;
}

const Scrollbar = forwardRef(function Scrollbar(
    { children, sx, ...other }: ScrollbarProps,
    ref: Ref<HTMLDivElement>
) {
    return (
        <StyledRootScrollbar>
            <StyledScrollbar
                scrollableNodeProps={{
                    ref,
                }}
                clickOnTrack={false}
                sx={sx}
                {...other}
            >
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
});

export default Scrollbar;
