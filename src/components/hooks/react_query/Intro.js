import { Stack, Typography } from '@mui/material'
import React from 'react'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    React Query
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan berupa custom hooks yang sering saya gunakan untuk react query 
                </Typography>
                <Typography variant='p' color='grey.400'>
                    "React Query" adalah sebuah halaman yang berisikan function pada 
                    javaccript yang biasanya digunakan pada sebuah component pada react untuk membantu saya dalam menyelesaikan masalah 
                    yang berkaitan dengan data fetching, request, dan lainnya
                </Typography>
            </Stack>
        </div>
    )
}

export default Intro