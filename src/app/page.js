"use client"
import Iconify from "@/components/Iconify";
import PageHeader from "@/components/PageHeader";
import NavbarLandingPage from "@/layout/dashboard/NavbarLandingPage";
import styled from "@emotion/styled";
import { Box, Button, Container, CssBaseline, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const RootStyle = styled('div')({
    backgroundColor: '#141a1f',
    overflowX: 'hidden',
});
const JumbotronRootStyle = styled('div')({
    display: 'flex',
    height: '100vh',
    background: "linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(11,36,61,1) 100%)",
});

const JumbotronRootStyle2 = styled('div')({
  display: 'flex',
  height: '100vh',
  background: "linear-gradient(180deg, rgba(11,36,61,1) 70%, rgba(0,0,0,1) 130%)",
});

export default function Home() {
    return (
        <PageHeader title="Landing Page">
            <RootStyle>
            <CssBaseline />
            <NavbarLandingPage />
              <JumbotronRootStyle>
                  <Container>
                      <Grid container alignItems='center'>
                        <Grid item xs={12} md={6} mt={{ xs: 10, md: 0 }}>
                          <Stack>
                            <Typography textAlign={{ xs: 'center', md: 'left' }} lineHeight={1} fontSize={{ xs: '2.5rem', md: '3.5rem' }} color='grey.100' fontWeight='bold'>
                              Contekan Ajaib <Box component='span' color='#3399FF'>Mempermudah</Box> Hidup Developer
                            </Typography>
                            <Typography textAlign={{ xs: 'center', md: 'left' }} mt={3} variant="p" color='grey.100' fontWeight='bold'>
                              Dokumentasiku adalah sebuah website yang dibuat untuk menyediakan contekan khususnya untuk frontend developer saat sedang membangun sebuah website  
                            </Typography>   
                            <Stack justifyContent={{ xs: 'center', md: 'start' }} direction='row' mt={3} spacing={3}>
                              <Link href='/docs'>
                                <Button 
                                  variant="contained" 
                                  sx={{ 
                                    borderRadius: 3,
                                    p: 2,
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    bgcolor: '#2789EC'
                                  }}
                                  endIcon={<Iconify icon='ooui:next-ltr' sx={{ transition: '0.2s', fontSize: '0.6rem', color: 'grey.300', ':hover': { color: 'grey.100', ml: 1} }} />}
                                >
                                  Get Started
                                </Button>
                              </Link>
                              <Link href='https://github.com/faldibule/dokumentasiku'>
                                <Button 
                                  variant="contained" 
                                  sx={{ 
                                    borderRadius: 3,
                                    p: 2,
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    bgcolor: '#1C2024',
                                    ':hover': {
                                      bgcolor: 'grey.800'
                                    }
                                  }}
                                  endIcon={<Iconify icon='ooui:next-ltr' sx={{ transition: '0.2s', fontSize: '0.6rem', color: 'grey.300', ':hover': { color: 'grey.100', ml: 1} }} />}
                                >
                                  View Github
                                </Button>
                              </Link>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item xs={0} md={6}>
                          <Stack display={{ md: 'flex', xs: 'none' }} direction='row' height='100vh' alignItems='center' justifyContent='center' spacing={2}> 
                            {/* <Image
                              src="/3dasset.png"
                              alt="Download on the App Store"
                              width="500"
                              height="500"
                            /> */}
                            <Image
                              src="https://mockuuups-web.ams3.cdn.digitaloceanspaces.com/web/images/header-iphone-mockups-2.png"
                              alt="Download on the App Store"
                              width="500"
                              height="500"
                            />
                          </Stack>
                        </Grid>
                      </Grid>
                  </Container>
              </JumbotronRootStyle>
              <Divider />
              {/* <JumbotronRootStyle2>
                <Container>
                    <Stack>
                        <Typography color='grey.100' variant="h3">
                          Still on Progress
                        </Typography>
                    </Stack>
                </Container>
              </JumbotronRootStyle2> */}
            </RootStyle>
        </PageHeader>
    );
}
