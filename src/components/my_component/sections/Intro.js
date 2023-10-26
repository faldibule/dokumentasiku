import { Stack, Typography } from '@mui/material'
import React from 'react'

const Intro = ({ id }) => {
    return (
        <div id={id} style={{ scrollMarginTop: '88px' }}>
            <Stack>
                <Typography variant='h2'>
                    My Component
                </Typography>
                <Typography variant='h4' color='grey.400'>
                    Berisikan "Component" custom yang sering saya gunakan
                </Typography>
                <Typography variant='p' color='grey.400'>"My Component" adalah halaman yang berisikan component-component yang pernah saya buat</Typography>
            </Stack>
        </div>
    )
}

export default Intro