import { useEffect, useState } from 'react';
import { MenuRounded } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const menu = [
  { id: 'docs', title: 'Docs' },
  { id: 'github', title: 'Github' },
];

export default function NavbarLandingPage(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useRouter()
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [drawer, setDrawer] = useState(false);
  const handleDrawer = (e, id) => {
    if (id !== undefined && id !== 'backdropClick') {
      setTimeout(() => {
        if(id === 'article'){
          navigate('/article')
        }else{
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' }, true);
        }
      }, 100);
    }
    setDrawer(!drawer);
  };

  return (
    <AppBar
      position="fixed"
      color={!!props.type ? 'transparent' : scrollPosition > 10 ? 'inherit' : 'transparent'}
      sx={{ 
        transition: '0.2s', 
        boxShadow: scrollPosition < 10 && 'none',
        background: !!props.type ? 'linear-gradient(to right, #43cea2, #185a9d)' : 'rgba(0, 0, 0, 0.6)',
        backdropFilter: !!props.type ? null : 'blur(4px)',
        webkitBackdropFilter: !!props.type ? null : 'blur(4px)',
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center" py={1} spacing={2}>

            {/* Mobile */}
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton onClick={handleDrawer}>
                <MenuRounded
                    sx={{ display: { xs: 'flex', md: 'none' }, color: !!props.type ? 'inherit' : scrollPosition < 10 ? '#fff' : 'inherit' }}
                />
                </IconButton>
                <Drawer anchor="top" open={drawer} onClose={handleDrawer}>
                <Box sx={{ width: 'auto' }} role="presentation">
                    <List>
                    {menu.map((value, index) => {
                        
                        return(
                        <ListItem key={index} disablePadding>
                        <ListItemButton onClick={(e) => handleDrawer(e, value.id)}>
                            <ListItemText primary={value.title} />
                        </ListItemButton>
                        </ListItem>
                        )
                    })}
                    </List>
                </Box>
                </Drawer>
                {/* <Logo white={!!props.type ? true : !(scrollPosition > 10)} /> */}
                {/* <Typography color='white'>Logo</Typography> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 36 32" fill="none" class="css-1170n61"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
            </Stack>
            
            {/* Dekstop */}
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {menu.map((value, index) => {
                    if(!!props.type){
                        return ;
                    }
                    return (
                        <Typography
                            key={index}
                            fontSize='0.7rem'
                            fontWeight="bold"
                            component={Button}
                            color='white'
                            onClick={() => { 
                                if(value.id == 'docs'){
                                    navigate.push('/docs')
                                }else if(value.id == 'github'){
                                    navigate.push(`https://github.com/faldibule/dokumentasiku`)
                                }
                            }}
                        >
                            {value.title}
                        </Typography>
                )
                })}
            </Stack>
            <Box />
            {/* <Button
                sx={{ height: 25, borderRadius: 25, fontSize: '0.7rem', p: 2 }}
                variant="contained"
                color={!!props.type ? 'inherit' : scrollPosition > 10 ? 'primary' : 'inherit'}
                onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' }, true)}
            >
                Download
            </Button> */}
        </Stack>
      </Container>
    </AppBar>
  );
}