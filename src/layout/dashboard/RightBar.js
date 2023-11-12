"use client"

import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
// mock
// hooks// components
import Scrollbar from '../../components/Scrollbar';
//
import PalestineCard from '@/components/PalestineCard';
import ListSection from '@/components/ListSection';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 250;

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#141A1F',
  color: 'white',
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: 80,
    display: 'block'
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  },
}));


// ----------------------------------------------------------------------

RightBar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function RightBar({ activeSection, navConfig, parentUrl }) {
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column', justifyContent: 'end' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <PalestineCard />
      </Box>
      <ListSection parentUrl={parentUrl} activeSection={activeSection} navConfig={navConfig} />
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
        <Drawer
            open
            variant="persistent"
            anchor='right'
            PaperProps={{
                sx: {
                    width: DRAWER_WIDTH,
                    bgcolor: '#141A1F',
                    color: 'white',
                    border: 'none',
                    mt: 8.5,
                },
            }}
        >
          {renderContent}
        </Drawer>
    </RootStyle>
  );
}
