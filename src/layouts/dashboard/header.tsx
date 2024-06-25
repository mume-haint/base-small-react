import Box, {BoxProps} from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import {Theme, useTheme} from '@mui/material/styles';
import AccountPopover from './common/account-popover';
import LanguagePopover from './common/language-popover.tsx';
import NotificationsPopover from './common/notifications-popover';
import IconButton from "@mui/material/IconButton";
import Iconify from "src/components/iconify";
import ThemeSwitch from "src/layouts/dashboard/common/theme-switch.tsx";
import useSettings from "src/hooks/useSettings.tsx";

// ----------------------------------------------------------------------



const Header = ({...other}: BoxProps) => {
  const theme: Theme = useTheme();
  const { onToggleSidebarCollapsed } = useSettings();


  const renderContent = (
    <>
      <IconButton onClick={onToggleSidebarCollapsed} sx={{mr: 1}}>
        <Iconify icon="eva:menu-2-fill"/>
      </IconButton>

      <Box sx={{flexGrow: 1}}/>

      <Stack direction="row" alignItems="center" spacing={1}>
        <ThemeSwitch/>
        <LanguagePopover/>
        <NotificationsPopover/>
        <AccountPopover/>
      </Stack>
    </>
  );

  return (
    <Box
      sx={{
        boxShadow: 'none',
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        display: 'block',
        backgroundColor: theme.palette.grey[500_24],
      }}
      {...other}
    >
      <Toolbar
        sx={{
          height: 1,
          px: 5,
        }}
      >
        {renderContent}
      </Toolbar>
    </Box>
  );
};

export default Header;
