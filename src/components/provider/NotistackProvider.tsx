import PropTypes from 'prop-types';
import {useRef} from 'react';
import {SnackbarKey, SnackbarProvider} from 'notistack';
// @mui
import {Box} from '@mui/material';
//
import Iconify from '../iconify';
import Button from "@mui/material/Button";

// ----------------------------------------------------------------------

interface NotistackProviderProps {
    children: React.ReactNode;
}

export default function NotistackProvider({ children }: NotistackProviderProps) {
    const notistackRef = useRef<SnackbarProvider>(null);

    const onClose = (key: SnackbarKey) => () => {
        notistackRef.current?.closeSnackbar(key);
    };

    return (
        <>
            <SnackbarProvider
                ref={notistackRef}
                dense
                maxSnack={3}
                autoHideDuration={3000}
                variant="success"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                iconVariant={{
                    info: <SnackbarIcon icon={'eva:info-fill'} />,
                    success: <SnackbarIcon icon={'eva:checkmark-circle-2-fill'} />,
                    warning: <SnackbarIcon icon={'eva:alert-triangle-fill'} />,
                    error: <SnackbarIcon icon={'eva:alert-circle-fill'} />,
                }}

                action={(key: SnackbarKey) => (
                    <Button size="small" onClick={onClose(key)} sx={{color: 'white'}}>
                        <Iconify icon={'eva:close-fill'} />
                    </Button>
                )}
            >
                {children}
            </SnackbarProvider>
        </>
    );
}

// ----------------------------------------------------------------------

interface SnackbarIconProps {
    icon: string;
}

function SnackbarIcon({ icon }: SnackbarIconProps) {
    return (
        <Box
            component="span"
            sx={{
                mr: 1.5,
                width: 40,
                height: 40,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Iconify icon={icon} width={24} height={24} />
        </Box>
    );
}

SnackbarIcon.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
};

