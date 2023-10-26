import React from "react";
import { AppBar, Box, CircularProgress, Drawer, Stack, Toolbar } from "@mui/material";
import { styled } from '@mui/material/styles';

const DRAWER_WIDTH = 200;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 70;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: '#141A1F',
  color: 'white',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));
function LoadingNavbar() {
   return (
      <RootStyle>
         <ToolbarStyle>
            <Box sx={{ flexGrow: 1 }} />
         

            {/* <Searchbar /> */}
            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                  <Box sx={{ display: { md: "flex", xs: 'none' }, justifyContent: "center", alignItems: "center" }}>
                     <CircularProgress />
                  </Box>
            </Stack>
         </ToolbarStyle>
      </RootStyle>
   );
}

export default LoadingNavbar;