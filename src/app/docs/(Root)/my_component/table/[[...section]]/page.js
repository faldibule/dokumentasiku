"use client"
import NavigationFooter from '@/components/NavigationFooter'
import PageHeader from '@/components/PageHeader'
import CustomActionTable from '@/components/my_component/table/CustomActionTable'
import CustomLink from '@/components/my_component/table/CustomLink'
import Intro from '@/components/my_component/table/Intro'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const config = getNavConfigByParent('my_component', 'table')
const sectionId = config.children.map((v) => v.id)

const Page = () => {
    const { section } = useParams()
    const [activeSection, setActiveSection] = useState('')
    return (
        <PageHeader title="Table">
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} lg={9.5}>
                        <Scrollspy offset={-100} items={sectionId} onUpdate={(e) => {
                            setActiveSection(e.id)
                        }}>
                            <Intro id='intro' />
                            <CustomActionTable id='CustomActionTable' />
                            <CustomLink id='CustomLink' />
                            <NavigationFooter 
                                isBack={true}
                                backUrl='/docs/my_component/overview_my_component'
                                backLabel='Overview'

                                isNext={true}
                                nextLabel='Form'
                                nextUrl='/docs/my_component/form'
                            />
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