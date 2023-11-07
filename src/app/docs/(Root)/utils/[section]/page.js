"use client"
import PageHeader from '@/components/PageHeader'
import IntegerFormatter from '@/components/utils/sections/IntegerFormatter'
import Intro from '@/components/utils/sections/Intro'
import NpwpFormatter from '@/components/utils/sections/NpwpFormatter'
import RupiahFormatter from '@/components/utils/sections/RupiahFormatter'
import { Container, Grid } from '@mui/material'
import React from 'react'

const Page = () => {
    return (
        <PageHeader title="Utils">
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Intro id='intro' />
                        <NpwpFormatter id='NpwpFormatter' />
                        <RupiahFormatter id='RupiahFormatter' />
                        <IntegerFormatter id='IntegerFormatter' />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page