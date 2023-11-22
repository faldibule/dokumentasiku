"use client"
import NavigationFooter from '@/components/NavigationFooter'
import PageHeader from '@/components/PageHeader'
import DeleteDialog from '@/components/my_component/dialog/DeleteDialog'
import DownloadDialog from '@/components/my_component/dialog/DownloadDialog'
import ImportDialog from '@/components/my_component/dialog/ImportDialog'
import Intro from '@/components/my_component/dialog/Intro'
import RightBar from '@/layout/dashboard/RightBar'
import getNavConfigByParent from '@/utils/getNavConfigByParent'
import { Container, Grid } from '@mui/material'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Scrollspy from 'react-scrollspy'

const config = getNavConfigByParent('my_component', 'dialog')
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
                            <DownloadDialog id="DownloadDialog" />
                            <ImportDialog id="ImportDialog" />
                            <DeleteDialog id="DeleteDialog" />

                            <NavigationFooter 
                                isBack={true}
                                backUrl='/docs/my_component/form'
                                backLabel='Form'

                                isNext={false}
                                
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