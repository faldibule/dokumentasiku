"use client"
import NavigationFooter from '@/components/NavigationFooter'
import PageHeader from '@/components/PageHeader'
import ControlledTextField from '@/components/my_component/form/ControlledTextField'
import CustomAutoComplete from '@/components/my_component/form/CustomAutoComplete'
import Intro from '@/components/my_component/form/Intro'
import UncontrolledOnSubmit from '@/components/my_component/form/UncontrolledOnSubmit'
import UncontrolledTextField from '@/components/my_component/form/UncontrolledTextField'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import { useState } from 'react'
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
                            <ControlledTextField id='ControlledTextField' />
                            <UncontrolledTextField id='UncontrolledTextField' />
                            <UncontrolledOnSubmit id='UncontrolledOnSubmit' />
                            <NavigationFooter 
                                isBack={true}
                                backUrl='/docs/my_component/table'
                                backLabel='Table'

                                isNext={true}
                                nextLabel='Dialog'
                                nextUrl='/docs/my_component/dialog'
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