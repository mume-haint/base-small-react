import {ReactNode} from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {alpha} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import {usePathname} from 'src/hooks';
import {RouterLink} from 'src/components/router-link';
import Logo from 'src/components/logo';
import navConfig from './config-navigation';
import {NAV} from "src/layouts/dashboard/config-layout.ts";
import {RootState} from "src/redux/store.ts";
import {useSelector} from "react-redux";
import useSettings from "src/hooks/useSettings.tsx";
import {useResponsive} from 'src/hooks/useResponsive';
import Drawer from "@mui/material/Drawer";

export default function Nav() {
  const {sidebarCollapsed, onChangeSidebarCollapsed} = useSettings();
  const {user} = useSelector((state: RootState) => state.auth)
  const upLg = useResponsive('up', 'lg');

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
      }}
    >
      <Avatar src={user.avatar} alt={user.display_name}/>

      <Box sx={{ml: 2}}>
        <Typography variant="subtitle2">{user.display_name}</Typography>

        <Typography variant="body2" sx={{color: 'text.secondary'}}>
          {user.username}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{px: 2}}>
      {navConfig.map((item) => (
        <NavItem open={!sidebarCollapsed || !upLg} key={item.title} item={item}/>
      ))}
    </Stack>
  );

  const renderContent = (
    <>
      <Logo sx={{mt: 3, ml: 4}}/>
      {(!sidebarCollapsed || !upLg) && renderAccount}
      {renderMenu}
    </>
  );



  return (upLg ? (
    <Box
      className="transition-[width]"
      style={{
        height: '100vh',
        width: !sidebarCollapsed ? NAV.WIDTH : NAV.WIDTH_CLOSE,
        overflowY: 'auto',
        borderRight: `solid 1px #cccccc`,
      }}
    >
      {renderContent}
    </Box>
  ) : (
    <Drawer
      variant="temporary"
      sx={{
        background: 'none',
      }}
      PaperProps={{
        sx: {
          backgroundImage: "none",
          boxShadow: 'none'
        }
      }}
      open={!sidebarCollapsed}
      onClose={() => {onChangeSidebarCollapsed(true)}}
    >
      {renderContent}
    </Drawer>
  ));
}

// ----------------------------------------------------------------------

interface NavItemProps {
  open?: boolean;
  item: {
    path: string;
    title: string;
    icon?: ReactNode;
  };
}

function NavItem({item, open}: NavItemProps) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        display: 'flex',
        gap: 2,
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{width: 24, height: 24}}>
        {item.icon}
      </Box>

      {open && <Box component="span">{item.title}</Box>}
    </ListItemButton>
  );
}
