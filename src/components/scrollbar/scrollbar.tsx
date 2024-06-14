import {forwardRef, ReactNode, Ref} from 'react';
import PropTypes from 'prop-types';

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

// PropTypes for type checking during development (optional, but useful)
Scrollbar.propTypes = {
    children: PropTypes.node,
    sx: PropTypes.object,
};

export default Scrollbar;
