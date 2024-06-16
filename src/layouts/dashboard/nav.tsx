import {ReactNode, useEffect} from 'react';

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
import Scrollbar from "src/components/scrollbar";
import {NAV} from "src/layouts/dashboard/config-layout.ts";
import {RootState} from "src/redux/store.ts";
import {useSelector} from "react-redux";

// ----------------------------------------------------------------------

interface NavProps {
    openNav: boolean;
    onCloseNav: () => void;
}

export default function Nav({ openNav, onCloseNav }: NavProps) {
    const pathname = usePathname();

    const { user} = useSelector((state: RootState) => state.auth)


    useEffect(() => {
        if (openNav) {
            onCloseNav();
        }
    }, [pathname]);

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
            <Avatar src={user.avatar} alt={user.display_name} />

            <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2">{user.display_name}</Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {user.username}
                </Typography>
            </Box>
        </Box>
    );

    const renderMenu = (
        <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
            {navConfig.map((item) => (
                <NavItem key={item.title} item={item} />
            ))}
        </Stack>
    );

    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                '& .simplebar-content': {
                    height: 1,
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            <Logo sx={{ mt: 3, ml: 4 }} />

            {renderAccount}

            {renderMenu}


        </Scrollbar>
    );

    return (
        <Box
            sx={{
                flexShrink: 0 ,
                width: NAV.WIDTH,
            }}
        >
                <Box
                    sx={{
                        height: 1,
                        position: 'fixed',
                        width: NAV.WIDTH,
                        borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
                    }}
                >
                    {renderContent}
                </Box>
        </Box>
    );
}

// ----------------------------------------------------------------------

interface NavItemProps {
    item: {
        path: string;
        title: string;
        icon?: ReactNode;
    };
}

function NavItem({ item }: NavItemProps) {
    const pathname = usePathname();

    const active = item.path === pathname;

    return (
        <ListItemButton
            component={RouterLink}
            href={item.path}
            sx={{
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
            <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                {item.icon}
            </Box>

            <Box component="span">{item.title}</Box>
        </ListItemButton>
    );
}
