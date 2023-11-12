import { Stack, Typography } from '@mui/material'
import React from 'react'

const Purpose = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>Purpose</Typography>
            <Typography variant='p' color='grey.400'>Purpose - adalah sebuah component yang dibuat untuk keperluan action pada sebuah table</Typography>
            <Stack direction='row'>
                
            </Stack>
        </Stack>
    </div>
  )
}

export default Purpose