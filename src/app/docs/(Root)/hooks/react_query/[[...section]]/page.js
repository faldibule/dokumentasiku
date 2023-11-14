"use client"
import NavigationFooter from '@/components/NavigationFooter'
import PageHeader from '@/components/PageHeader'
import Intro from '@/components/hooks/react_query/Intro'
import UseDelete from '@/components/hooks/react_query/useDelete'
import UseFetch from '@/components/hooks/react_query/useFetch'
import UseFetchById from '@/components/hooks/react_query/useFetchById'
import UseImport from '@/components/hooks/react_query/useImport'
import UseSave from '@/components/hooks/react_query/useSave'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const config = getNavConfigByParent('hooks', 'react_query')
const sectionId = config.children.map((v) => v.id)

const Page = () => {
    const { section } = useParams()
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="React Query">
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} lg={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                            setActiveSection(e.id)
                        }}>
                            <Intro id='intro' />
                            <UseFetch id='useFetch' />
                            <UseFetchById id='useFetchById' />
                            <UseSave id='useSave' />
                            <UseDelete id='useDelete' />
                            <UseImport id='useImport' />

                            <NavigationFooter 
                                isBack={true}
                                backLabel='Overview'
                                backUrl='/docs/hooks/overview_hooks'
                                
                                isNext={false}
                                // nextLabel='React Query'
                                // nextUrl='/docs/hooks/react_query'
                            />
                        </Scrollspy>
                    </Grid>
                    <Grid item md={0} lg={2}>
                        <RightBar parentUrl='/docs/hooks' navConfig={[config]} activeSection={activeSection} />
                    </Grid>
                </Grid>
            </Container>
        </PageHeader>
    )
}

export default Page