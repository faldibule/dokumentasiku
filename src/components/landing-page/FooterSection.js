import styled from '@emotion/styled';
import { Box, Container, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';
import Iconify from '../Iconify';

const FooterSectionRootStyle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    minHeight: '30vh',
    color: 'white',
    background: "#101820",
});
const CustomIconLink = ({ icon, link, title }) => {
    return (
        <Tooltip title={title}>
            <Link target='_blank' href={link} style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton>
                    <Iconify icon={icon} sx={{ color: 'white' }} />
                </IconButton>
            </Link>
        </Tooltip>
    )
}

const FooterSection = () => {
    return (
        <FooterSectionRootStyle>
            <Container>
                <Grid container spacing={3} justifyContent='space-between'>
                    <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'left' }} mt={{ xs: 3, md: 0 }}>
                        <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' }, color: '#2789EC' }} fontWeight='800'>
                            Dokumentasiku
                        </Typography> 
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.8rem' } }} fontWeight='700'>
                            Copyright
                            <Box component='span' color='#3399FF' sx={{
                                background: '-webkit-linear-gradient(#6aa9e8, #2789EC, #000000)',
                                m: 1,
                                '-webkit-background-clip': 'text',
                                '-webkit-text-fill-color': 'transparent',
                            }}>
                                © 2023.
                            </Box> 
                            All rights reserved.
                        </Typography> 
                        <Typography fontSize='0.8rem' fontWeight='bold' color='grey.400' mt={{ md: 3, xs: 1 }}>Contekan Ajaibku</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign='center'>
                        <Typography color='grey.400' fontWeight='800'>Social Media</Typography>
                        <Stack mt={1} direction='row' spacing={3} justifyContent='center' alignItems='center'>
                            <CustomIconLink 
                                icon='ic:baseline-facebook'
                                link='https://web.facebook.com/faldinakmoeara'
                                title='Facebook'
                            />
                            <CustomIconLink 
                                icon='formkit:twitter'
                                link='https://twitter.com/faldibule'
                                title='Twitter'
                            />
                            <CustomIconLink 
                                icon='ri:instagram-fill'
                                link='https://www.instagram.com/faldi.bule/'
                                title='Instagram'
                            />
                            <CustomIconLink 
                                icon='mdi:linkedin'
                                link='https://www.linkedin.com/in/faldi-nur-ikhsan-b09925250/'
                                title='Linkedin'
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign='center' mb={{ xs: 3, md: 0 }}>
                        <Typography color='grey.400' fontWeight='800'>Hit me!</Typography>
                        <Typography textAlign='center' fontSize='0.8rem' fontWeight='bold' color='grey.400'>mernblog123@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Container>
        </FooterSectionRootStyle>
    )
}

export default FooterSection