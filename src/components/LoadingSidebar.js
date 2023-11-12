import React from "react";
import { Box, CircularProgress, Drawer } from "@mui/material";
import { styled } from '@mui/material/styles';

const DRAWER_WIDTH = 250;

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#141A1F',
  color: 'white',
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));
function LoadingSidebar() {
   return (
      <RootStyle>
         <Drawer
            open={true}
            variant="persistent"
            PaperProps={{
               sx: {
                  width: {
                     md: DRAWER_WIDTH,
                     xs: '0px'
                  },
                  bgcolor: '#141A1F',
                  color: 'white',
                  borderRightStyle: 'dashed',
               },
            }}
         >
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: 240 }}>
               <CircularProgress />
            </Box>
         </Drawer>
      </RootStyle>
   );
}

export default LoadingSidebar;