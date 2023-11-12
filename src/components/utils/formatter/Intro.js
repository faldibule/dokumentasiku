import { Stack, Typography } from '@mui/material'
import React from 'react'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    Formatter
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan "Formatter" berupa function custom yang sering saya gunakan untuk 'mem-format'
                </Typography>
                <Typography variant='p' color='grey.400'>"Formatter" adalah halaman yang berisikan 'Function' yang pernah saya buat untuk membantu saya dalam menyelesaikan masalah yang biasanya dijumpai saat sedang membuat suatu aplikasi</Typography>
            </Stack>
        </div>
    )
}

export default Intro