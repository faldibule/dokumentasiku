import { Box, Button, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Iconify from './Iconify'

const NavigationFooter = ({ 
    isBack, backUrl, backLabel, 
    isNext, nextUrl, nextLabel
}) => {
    return (
        <Stack mt={10} direction='row' justifyContent='space-between' alignItems='center'>
            {isBack ?
                <Link href={backUrl} style={{ textDecoration: 'none' }}>
                <Stack width={150} sx={{ 
                    px: 2, py: 1,
                    color: 'grey.300', 
                    ':hover': { color: 'grey.100' } 
                }}>
                    <Typography color='grey.500' align='right'>Previous</Typography>
                    <Stack mt={1} alignItems='center' direction='row' justifyContent='space-between'>
                        <Iconify icon='ooui:next-rtl' sx={{ fontSize: '0.8rem', color: 'grey.300', ':hover': { color: 'grey.100' } }} />
                        <Typography sx={{  }}>{backLabel}</Typography>
                    </Stack>
                </Stack>
            </Link>
            : <Box />
            }
            {isNext ?
                <Link href={nextUrl} style={{ textDecoration: 'none' }}>
                    <Stack width={150} sx={{ 
                        px: 2, py: 1,
                        color: 'grey.300', 
                        ':hover': { color: 'grey.100' } 
                    }}>
                        <Typography color='grey.500'>Next</Typography>
                        <Stack mt={1} alignItems='center' direction='row' justifyContent='space-between'>
                            <Typography sx={{  }}>{nextLabel}</Typography>
                            <Iconify icon='ooui:next-ltr' sx={{ fontSize: '0.8rem', color: 'grey.300', ':hover': { color: 'grey.100' } }} />
                        </Stack>
                    </Stack>
                </Link>
                : <Box />
            }
        </Stack>
    )
}

export default NavigationFooter