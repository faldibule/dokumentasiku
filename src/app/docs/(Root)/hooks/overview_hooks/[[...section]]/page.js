"use client"
import NavigationFooter from '@/components/NavigationFooter'
import PageHeader from '@/components/PageHeader'
import Intro from '@/components/hooks/overview/Intro'
import Purpose from '@/components/hooks/overview/Purpose'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const config = getNavConfigByParent('hooks', 'overview_hooks')
const sectionId = config.children.map((v) => v.id)

const Page = () => {
    const { section } = useParams()
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="Overview">
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} lg={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                            setActiveSection(e.id)
                        }}>
                            <Intro id='intro' />
                            <Purpose id='purpose' />
                            <NavigationFooter 
                                isBack={false}
                                
                                isNext={true}
                                nextLabel='React Query'
                                nextUrl='/docs/hooks/react_query'
                            />
                        </Scrollspy>
                    </Grid>
                    <Grid item md={0} lg={2}>
                        <RightBar parentUrl='/docs/utils' navConfig={[config]} activeSection={activeSection} />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page