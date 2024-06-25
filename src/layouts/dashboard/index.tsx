import {ReactNode} from 'react';

import {Box} from '@mui/material';

import Nav from './nav';
import Header from './header';

// ----------------------------------------------------------------------
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {

  return (
    <div className="w-screen h-screen flex">
      <Nav/>
      <Box className="h-screen flex flex-col flex-1 items-stretch overflow-auto">
        <Header className="sticky top-0 flex-0 backdrop-blur"/>
        <div className="flex-1">{children}</div>
      </Box>
    </div>
  );
}

