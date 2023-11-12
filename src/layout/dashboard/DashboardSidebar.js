"use client"

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// mock
// hooks
import useResponsive from '@/hooks/useResponsive';
// components
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 250;

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#141A1F',
  color: 'white',
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));


// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const pathname = usePathname();
  const isMobile = useResponsive('down', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Typography fontWeight='bold' fontSize='1.2rem'>
          DOKUMENTASIKU
        </Typography>
        <Typography fontSize='0.9rem' fontWeight='bold' color='primary.main'>Contekan ajaib</Typography>
      </Box>
      <NavSection navConfig={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {isMobile && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { 
              width: DRAWER_WIDTH,
              bgcolor: '#141A1F',
              color: 'white',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {!isMobile && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: '#141A1F',
              color: 'white',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
