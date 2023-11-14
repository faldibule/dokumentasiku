import PageHeader from '@/components/PageHeader'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <PageHeader title='My Component'>
        {children}
    </PageHeader>
  )
}

export default Layout