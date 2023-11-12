import { Stack, Typography } from '@mui/material'
import React from 'react'

const Purpose = ({ id }) => {
  return (
    <div id={id} style={{ scrollMarginTop: '88px' }}>
        <Stack mt={5} spacing={1} id="test">
            <Typography variant='h3'>Purpose</Typography>
            <Typography variant='p' color='grey.400'>Tujuan dibuatnya halaman ini adalah untuk memberikan informasi terkait utilities atau alat bantu apa saja yang sering saya gunakan dalam mengerjakan project</Typography>
        </Stack>
    </div>
  )
}

export default Purpose