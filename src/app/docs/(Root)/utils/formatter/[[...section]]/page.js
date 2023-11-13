"use client"
import NavigationFooter from '@/components/NavigationFooter'
import PageHeader from '@/components/PageHeader'
import CustomActionTable from '@/components/my_component/table/CustomActionTable'
import IntegerFormatter from '@/components/utils/formatter/IntegerFormatter'
import Intro from '@/components/utils/formatter/Intro'
import NpwpFormatter from '@/components/utils/formatter/NpwpFormatter'
import RupiahFormatter from '@/components/utils/formatter/RupiahFormatter'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const config = getNavConfigByParent('utils', 'formatter')
const sectionId = config.children.map((v) => v.id)

const Page = () => {
    const { section } = useParams()
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="Formatter">
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} lg={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                            setActiveSection(e.id)
                        }}>
                            <Intro id='intro' />
                            <NpwpFormatter id='NpwpFormatter' />
                            <RupiahFormatter id='RupiahFormatter' />
                            <IntegerFormatter id='IntegerFormatter' />
                            <NavigationFooter 
                                isBack={true}
                                backUrl='/docs/utils/overview_utils'
                                backLabel='Overview'

                                isNext={false}
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