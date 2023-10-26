"use client"
import DashboardNavbar from '@/layout/dashboard/DashboardNavbar';
import DashboardSidebar from '@/layout/dashboard/DashboardSidebar';
import ThemeProvider from '@/theme';
import { styled } from '@mui/material/styles';
import { Suspense, useState } from 'react';
import { RecoilRoot } from 'recoil';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 70;

const RootStyle = styled('div')({
    backgroundColor: '#141A1F', 
    color: 'white',
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

export default function DashboardLayout({ children }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <ThemeProvider>
                <RecoilRoot>
                    <RootStyle>
                        <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
                        <Suspense fallback={'Loading...'}>
                            <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
                        </Suspense>
                        <MainStyle>
                                {children}
                            {/* <Middleware.After>
                            </Middleware.After> */}
                        </MainStyle>
                    </RootStyle>
                </RecoilRoot>
            </ThemeProvider>
        </>
    )
}
