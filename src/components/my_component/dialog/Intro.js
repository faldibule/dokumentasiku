import { Stack, Typography } from '@mui/material'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    Dialog
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan "Component" Dialog
                </Typography>
                <Typography variant='p' color='grey.400'>"Dialog" adalah halaman yang berisikan component-component yang pernah saya buat untuk keperluan Dialog dengan tujuannya masing-masing</Typography>
            </Stack>
        </div>
    )
}

export default Intro