import { Card, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PalestineCard = () => {
  return (
    <Stack>
        <Card sx={{ p: 1, bgcolor: 'grey.800', color: 'white', fontSize: '0.8rem' }}>
            <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
                <Image src='/palestine.svg' width={30} height={20} alt='palestine_flag' />
                <Typography fontWeight='bold' fontSize='0.8rem'>Stand With Palestine</Typography>
            </Stack>
        </Card>
    </Stack>
  
  )
}

export default PalestineCard