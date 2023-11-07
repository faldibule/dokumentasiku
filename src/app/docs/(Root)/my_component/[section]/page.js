"use client"
import PageHeader from '@/components/PageHeader'
import CustomActionTable from '@/components/my_component/sections/CustomActionTable'
import CustomAutoComplete from '@/components/my_component/sections/CustomAutoComplete'
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
                        <CustomActionTable id='CustomActionTable' />
                        <CustomAutoComplete id='CustomAutoComplete' />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page