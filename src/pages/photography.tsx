import React from 'react'
import { Layout } from '../components/Layout'
import { PhotographyLayout } from '../layouts/PhotographyLayout'

const PhotographyPage: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <PhotographyLayout />
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default PhotographyPage
