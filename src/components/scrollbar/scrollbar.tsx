import {forwardRef, ReactNode, Ref} from 'react';


import {StyledRootScrollbar, StyledScrollbar} from './styles';
import {Props as SimpleBarProps} from 'simplebar-react';

interface ScrollbarProps extends SimpleBarProps {
    children?: ReactNode;
}

const Scrollbar = forwardRef(function Scrollbar(
    { children, ...other }: ScrollbarProps,
    ref: Ref<HTMLDivElement>
) {
    return (
        <StyledRootScrollbar>
            <StyledScrollbar
                scrollableNodeProps={{
                    ref,
                }}
                clickOnTrack={false}
                {...other}
            >
                {children}
            </StyledScrollbar>
        </StyledRootScrollbar>
    );
});

export default Scrollbar;
