import styled from '@emotion/styled';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Iconify from '../Iconify';

const CardSectionRootStyle = styled('div')({
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    color: 'white',
    background: "linear-gradient(180deg, rgba(11,36,61,1) 5%, rgba(0,0,0,1) 100%)",
});


const CardSection = () => {
    return (
        <CardSectionRootStyle>
            <Container>
                <Typography textAlign='center' sx={{ fontSize: { xs: '2rem', md: '3rem' } }} fontWeight='800'>
                    WHY I 
                    <Box component='span' color='#3399FF' sx={{
                        background: '-webkit-linear-gradient(#6aa9e8, #2789EC, #000000)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                        m: 1,
                    }}>
                        MADE
                    </Box> 
                    THIS?
                </Typography>
                <Typography textAlign='center'>Alasan utama saya membuat website ini kurang lebih dibagi menjadi 3 bagian</Typography>
                <Grid container spacing={3} mt={{ xs: 5, md: 10 }} justifyContent='center'>
                    <Grid item xs={10} md={4}>
                        <Box sx={{
                            p: 2,
                            background: "linear-gradient(180deg, rgba(11,36,91,1) 5%, rgba(20, 20, 20,1) 100%)",
                            borderRadius: 2,
                            minHeight: 350,
                            border: 1,
                            borderStyle: 'double',
                            borderColor: '#2F2F2F',
                            color: 'white',
                            transition: '0.5s',
                            ':hover': {
                                borderColor: '#444444',
                                boxShadow: '0px 23px 34px 14px rgba(62,62,157,0.31)',
                            }
                        }}>
                            <Stack>
                                <Iconify icon='game-icons:strong' sx={{ fontSize: '5rem', color: 'rgba(11,36,161,1)', mt: 3 }} />
                                <Stack spacing={3} mt={4} color='grey.300'>
                                    <Typography fontSize='1rem' fontWeight='bold'>
                                        <Box mr={1} component='span' color='rgba(11,106,180,1)' whiteSpace='pre'>
                                            MELATIH 
                                        </Box> 
                                         KEMAMPUAN NGODING
                                    </Typography>
                                    <Typography fontSize='0.8rem'>Salah satu tujuan utama adalah melatih kemampuan mengoding saya pribadi, karena menurut saya latihan terbaik adalah dengan membuat project dari keresahan sendiri.</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={10} md={4}>
                        <Box sx={{
                            p: 2,
                            borderRadius: 2,
                            background: "linear-gradient(180deg, rgba(55,36,61, 1) 5%, rgba(20, 20, 20,1) 100%)",
                            minHeight: 350,
                            border: 1,
                            borderStyle: 'double',
                            borderColor: '#2F2F2F',
                            color: 'white',
                            ':hover': {
                                borderColor: '#444444',
                                boxShadow: '0px 23px 34px 14px rgb(157,62,62, 0.31)',
                            }
                        }}>
                            <Stack>
                                <Iconify icon='fa-solid:brain' sx={{ fontSize: '5rem', color: 'rgba(115,36,61, 1)', mt: 3 }} />
                                <Stack spacing={3} mt={4} color='grey.300'>
                                    <Typography fontSize='1rem' fontWeight='bold'>
                                        <Box mr={1} component='span' color='rgba(165,56,61, 1)' whiteSpace='pre'>
                                            PENGINGAT 
                                        </Box> 
                                         DIRI SENDIRI
                                    </Typography>
                                    <Typography fontSize='0.8rem'>
                                        Sebagai seorang developer, saat kita sedang menyelesaikan suatu masalah, kadang kala kita merasa "hmmm kayanya pernah bikin gini deh tapi gimana ya?". Maka dari itu, saya membuat website ini bertujuan untuk mengingatkan diri saya sendiri. 
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={10} md={4}>
                        <Box sx={{
                            p: 2,
                            borderRadius: 2,
                            background: "linear-gradient(180deg, rgba(11,66,61, 1) 5%, rgba(20, 20, 20,1) 100%)",
                            minHeight: 350,
                            border: 1,
                            borderStyle: 'double',
                            borderColor: '#2F2F2F',
                            color: 'white',
                            ':hover': {
                                borderColor: '#444444',
                                boxShadow: '0px 23px 34px 14px rgb(61,147,58, 0.31)',
                            }
                        }}>
                            <Stack>
                                <Iconify icon='ph:code-fill' sx={{ fontSize: '5rem', color: 'rgba(11,116,61, 1)', mt: 3 }} />
                                <Stack spacing={3} mt={4} color='grey.300'>
                                    <Typography fontSize='1rem' fontWeight='bold'>
                                        <Box mr={1} component='span' color='rgba(11,156,61, 1)' whiteSpace='pre'>
                                            BELAJAR 
                                        </Box> 
                                        BIKIN DOKUMENTASI
                                    </Typography>
                                    <Typography fontSize='0.8rem'>Saat sedang melihat suatu dokumentasi, kadang suka berfikir "Ini buatnya gimana ya?". Berawal dari rasa penasaran itulah akhirnya saya memutuskan untuk membuat website ini</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </CardSectionRootStyle>
    )
}

export default CardSection