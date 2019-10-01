import React from 'react'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Grid } from '../components/grid'
import { DynamicImage } from '../components/dynamicimage'

const SecondPage: () => JSX.Element = (): JSX.Element => (
  <Layout>
    <SEO title="Photography" />
    <article>
      <h1>Photography</h1>
      <p>
        Something I also enjoy doing, but don't do that often. As part of my
        personal story I figured it could be fun to add some shots that I think
        worked out quite acceptably.
      </p>
    </article>
    <Grid columns={3}>
      <DynamicImage path="photography/" />
    </Grid>
  </Layout>
)

// tslint:disable-next-line: no-default-export
export default SecondPage
