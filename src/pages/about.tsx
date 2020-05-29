import React from 'react'
import { Layout } from '../components/Layout'
import { AboutLayout } from '../layouts/AboutLayout'

const AboutMe: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <AboutLayout />
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default AboutMe
