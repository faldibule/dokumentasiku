"use client"
import PageHeader from '@/components/PageHeader'
import CustomAutoComplete from '@/components/my_component/form/CustomAutoComplete'
import Intro from '@/components/my_component/form/Intro'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const config = getNavConfigByParent('my_component', 'form')
const sectionId = config?.children?.map((v) => v.id)

const Page = () => {
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="Form">
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} lg={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                            setActiveSection(e.id)
                        }}>
                            <Intro id='intro' />
                            <CustomAutoComplete id='CustomAutoComplete' />
                            <CustomAutoComplete id='CustomAutoComplete2' />
                            <CustomAutoComplete id='CustomAutoComplete3' />
                        </Scrollspy>
                    </Grid>
                    <Grid item md={0} lg={2}>
                        <RightBar parentUrl='/docs/my_component' navConfig={[config]} activeSection={activeSection} />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page