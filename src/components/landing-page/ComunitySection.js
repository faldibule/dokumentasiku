import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Iconify from '../Iconify';

const ComunitySectionRootStyle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    color: 'white',
    background: "linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(11,36,61,1) 100%)",
});


const ComunitySection = () => {
    return (
        <ComunitySectionRootStyle>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={11} md={6} textAlign={{ md: 'left', xs: 'center' }}>
                        <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' }, color: '#2789EC' }} fontWeight='800'>
                            Komunitas
                        </Typography> 
                        <Typography sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} fontWeight='700'>
                            Ikut komunitas <br />
                            <Box component='span' color='#3399FF' sx={{
                                background: '-webkit-linear-gradient(#6aa9e8, #2789EC, #000000)',
                                '-webkit-background-clip': 'text',
                                '-webkit-text-fill-color': 'transparent',
                            }}>
                                Dokumentasiku
                            </Box> 
                        </Typography> 
                        <Typography color='grey.400'>Isi contekan ini hanya berdasarkan pengalaman dan case yang pernah saya temui. Maka dari itu, buatlah contekan kalian sendiri disini yang mungkin bisa membantu orang lain</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container mt={1} spacing={3} alignItems='stretch'>
                            <Grid item xs={6} md={6}>
                                <Stack sx={{
                                    borderLeft: 1,
                                    borderColor: 'grey.800',
                                    px: 2,
                                    ml: 5,
                                }}>
                                    <Typography fontSize='2rem' color='#99CCF3' fontWeight='700'>0M</Typography>
                                    <Typography fontSize={{ xs: '0.8rem', md: '1rem' }} color='grey.400'>Jumlah unduh mingguan</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Stack sx={{
                                    borderLeft: 1,
                                    borderColor: 'grey.800',
                                    px: 2,
                                    ml: 5,
                                }}>
                                    <Typography fontSize='2rem' color='#99CCF3' fontWeight='700'>0k</Typography>
                                    <Typography fontSize={{ xs: '0.8rem', md: '1rem' }} color='grey.400'>Jumlah star Github</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Stack sx={{
                                    borderLeft: 1,
                                    borderColor: 'grey.800',
                                    px: 2,
                                    ml: 5,
                                }}>
                                    <Typography fontSize='2rem' color='#99CCF3' fontWeight='700'>0k</Typography>
                                    <Typography fontSize={{ xs: '0.8rem', md: '1rem' }} color='grey.400'>Jumlah Kontributor</Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Stack sx={{
                                    borderLeft: 1,
                                    borderColor: 'grey.800',
                                    px: 2,
                                    ml: 5,
                                }}>
                                    <Typography fontSize='2rem' color='#99CCF3' fontWeight='700'>250</Typography>
                                    <Typography fontSize={{ xs: '0.8rem', md: '1rem' }} color='grey.400'>Jumlah follower di X</Typography>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </ComunitySectionRootStyle>
    )
}

export default ComunitySection