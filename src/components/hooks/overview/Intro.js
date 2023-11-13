import { Stack, Typography } from '@mui/material'
import React from 'react'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    Hooks
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan berupa react custom hooks yang sering saya gunakan
                </Typography>
                <Typography variant='p' color='grey.400'>"Hooks" adalah sebuah function pada javaccript yang biasanya digunakan pada sebuah component pada react untuk membantu saya dalam menyelesaikan masalah</Typography>
            </Stack>
        </div>
    )
}

export default Intro