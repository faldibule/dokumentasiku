import { Box, Card, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const PalestineCard = () => {
  return (
    <Stack>
        <Card sx={{ p: 1, px: 2, bgcolor: 'grey.800', color: 'white' }}>
            <Stack direction='row' alignItems='center' justifyContent='center' spacing={2}>
                <Image src='/palestine.svg' width={30} height={20} alt='palestine_flag' />
                <Typography fontWeight='bold' fontSize='0.8rem'> <Box component='span' color='#3190F0'>Dokumentasiku</Box> Stand in Solidarity With Palestine</Typography>
            </Stack>
        </Card>
    </Stack>
  
  )
}

export default PalestineCard