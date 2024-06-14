import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme, Theme } from '@mui/material/styles';




import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import LanguagePopover from './common/language-popover.tsx';
import NotificationsPopover from './common/notifications-popover';

// ----------------------------------------------------------------------

const Header = () => {
    const theme: Theme = useTheme();

    const renderContent = (
        <>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" alignItems="center" spacing={1}>
                <LanguagePopover />
                <NotificationsPopover />
                <AccountPopover />
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                zIndex: theme.zIndex.appBar + 1,
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                width: `calc(100% - ${NAV.WIDTH + 1}px)`,
                height: HEADER.H_DESKTOP,
                bgcolor: 'rgba(203,202,202,0.8)'
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: 5,
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
