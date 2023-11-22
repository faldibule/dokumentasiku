import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import DarkmodeToggle from '../DarkmodeToggle';

const UtsRootStyle = styled('div')({
    display: 'flex',
    alignItems: 'center',
    minHeight: '30vh',
    color: 'white',
    background: "white",
});

const Uts = () => {
    return (
        <UtsRootStyle>
            <Container>
                <Grid container spacing={3} justifyContent='space-between'>
                    <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'left' }} mt={{ xs: 3, md: 0 }}>
                        <DarkmodeToggle />
                    </Grid>
                </Grid>
            </Container>
        </UtsRootStyle>
    )
}

export default Uts