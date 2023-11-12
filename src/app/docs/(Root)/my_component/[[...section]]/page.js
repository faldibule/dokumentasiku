"use client"
import PageHeader from '@/components/PageHeader'
import CustomActionTable from '@/components/my_component/sections/CustomActionTable'
import CustomAutoComplete from '@/components/my_component/sections/CustomAutoComplete'
import Intro from '@/components/my_component/sections/Intro'
import navConfig from '@/layout/dashboard/NavConfig'
import RightBar from '@/layout/dashboard/RightBar'
import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const navConfigFiltered = navConfig.filter((v) => v.title === 'My Component')
const sectionId = navConfigFiltered[0].children?.map((v) => { 
    return v.path.replaceAll('/#', '') 
})

const Page = () => {
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="My Component">
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} lg={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                            setActiveSection(e.id)
                        }}>
                            <Intro id='intro' />
                            <CustomActionTable id='CustomActionTable' />
                            <CustomAutoComplete id='CustomAutoComplete' />
                        </Scrollspy>
                    </Grid>
                    <Grid item md={0} lg={2}>
                        <RightBar navConfig={navConfigFiltered} activeSection={activeSection} />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page