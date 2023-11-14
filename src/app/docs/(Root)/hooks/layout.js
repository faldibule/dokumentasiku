import PageHeader from '@/components/PageHeader'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <PageHeader title='Hooks'>
        {children}
    </PageHeader>
  )
}

export default Layout