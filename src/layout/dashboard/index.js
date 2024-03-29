"use client"
import { useState } from 'react';

// material

// ----------------------------------------------------------------------
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import styled from '@emotion/styled';
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 70;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        {children}
      </MainStyle>
    </RootStyle>
  );
}
