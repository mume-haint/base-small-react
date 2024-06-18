import {ReactNode, useState} from 'react';

import {Box} from '@mui/material';

import Nav from './nav';
import Main from './main';
import Header from './header';

// ----------------------------------------------------------------------
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <Header onOpenNav={() => setOpenNav(true)}/>
            <Box
                sx={{
                    minHeight: 1,
                    display: 'flex',
                }}
            >
                <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)}/>

                <Main>{children}</Main>
            </Box>
        </>
    );
}

