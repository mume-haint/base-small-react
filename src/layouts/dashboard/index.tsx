import {ReactNode, useState} from 'react';

import {Box} from '@mui/material';

import Nav from './nav';
import Header from './header';

// ----------------------------------------------------------------------
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="w-screen h-screen flex">
      <Nav openNav={openNav}/>
      <Box className="h-screen flex flex-col flex-1 items-stretch overflow-auto">
        <Header className="sticky top-0 flex-0" onOpenNav={() => setOpenNav(!openNav)}/>
        <div className="flex-1">{children}</div>
      </Box>
    </div>
  );
}

