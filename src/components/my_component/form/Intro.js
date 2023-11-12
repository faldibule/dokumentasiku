import { Stack, Typography } from '@mui/material'
import React from 'react'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack spacing={{ xs: 1 }} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant='h2'>
                    Form
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan "Component" custom untuk yang sering saya gunakan untuk keperluan Form input
                </Typography>
                <Typography variant='p' color='grey.400'>"Form" adalah halaman yang berisikan component-component yang pernah saya buat untuk keperluan Form input ataupun lainnya</Typography>
            </Stack>
        </div>
    )
}

export default Intro