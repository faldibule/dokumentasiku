import { Stack, Typography } from '@mui/material'
import React from 'react'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    Utils
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan "Utils" berupa function custom yang sering saya gunakan
                </Typography>
                <Typography variant='p' color='grey.400'>"Utils" adalah halaman yang berisikan 'Function' yang pernah saya buat  untuk membantu saya dalam menyelesaikan masalah</Typography>
            </Stack>
        </div>
    )
}

export default Intro