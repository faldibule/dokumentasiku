import { Stack, Typography } from '@mui/material'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    UI Hooks
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan berupa custom hooks yang sering saya gunakan untuk kebutuhan UI/UX didalam suatu page
                </Typography>
                <Typography variant='p' color='grey.400'>
                    "UI Hooks" adalah sebuah halaman yang berisikan function pada 
                    javaccript yang biasanya digunakan pada sebuah component pada react untuk membantu saya dalam menyelesaikan masalah 
                    yang berkaitan dengan UI/UX didalam sebuah pages
                </Typography>
            </Stack>
        </div>
    )
}

export default Intro