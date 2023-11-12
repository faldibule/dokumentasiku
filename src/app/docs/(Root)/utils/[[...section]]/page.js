"use client"
import PageHeader from '@/components/PageHeader'
import IntegerFormatter from '@/components/utils/sections/IntegerFormatter'
import Intro from '@/components/utils/sections/Intro'
import NpwpFormatter from '@/components/utils/sections/NpwpFormatter'
import RupiahFormatter from '@/components/utils/sections/RupiahFormatter'
import navConfig from '@/layout/dashboard/NavConfig'
import RightBar from '@/layout/dashboard/RightBar'
import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const navConfigFiltered = navConfig.filter((v) => v.title === 'Utils')
const sectionId = navConfigFiltered[0].children?.map((v) => { 
    return v.path.replaceAll('/#', '') 
})

const Page = () => {
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="Utils">
            <Container>
                <Grid container>
                    <Grid item xs={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                                setActiveSection(e.id)
                            }}>
                            <Intro id='intro' />
                            <NpwpFormatter id='NpwpFormatter' />
                            <RupiahFormatter id='RupiahFormatter' />
                            <IntegerFormatter id='IntegerFormatter' />
                        </Scrollspy>
                    </Grid>
                    <Grid item xs={0} md={2}>
                        <RightBar navConfig={navConfigFiltered} activeSection={activeSection} />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page