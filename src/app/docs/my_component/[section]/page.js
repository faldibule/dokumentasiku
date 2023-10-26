"use client"
import PageHeader from '@/components/PageHeader'
import CustomActionTable from '@/components/my_component/sections/CustomActionTable'
import Intro from '@/components/my_component/sections/Intro'
import { Container, Grid } from '@mui/material'
import React from 'react'

const Page = () => {
    return (
        <PageHeader title="My Component">
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Intro id='intro' />
                        <CustomActionTable id='1' />
                        <CustomActionTable id='2' />
                        <CustomActionTable id='3' />
                        <CustomActionTable id='4' />
                        <CustomActionTable id='5' />
                        <CustomActionTable id='6' />
                        <CustomActionTable id='7' />
                        <CustomActionTable id='8' />
                        <CustomActionTable id='9' />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page