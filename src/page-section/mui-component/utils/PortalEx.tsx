import {Portal} from '@mui/base/Portal';
import {Box} from '@mui/system';
import {useRef, useState} from "react";

export default function PortalEx() {
    const [show, setShow] = useState(false);
    const container = useRef(null);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <button type="button" onClick={handleClick}>
                {show ? 'Unmount children' : 'Mount children'}
            </button>
            <Box sx={{p: 1, my: 1, border: '1px solid'}}>
                It looks like I will render here.
                {show ? (
                    <Portal container={() => container.current}>
                        <span>But I actually render here!</span>
                    </Portal>
                ) : null}
            </Box>
            <Box sx={{p: 1, my: 1, border: '1px solid'}} ref={container}/>
        </div>
    );
}
